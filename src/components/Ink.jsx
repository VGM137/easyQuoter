import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInk, updateInkDependencie } from '../actions';
import '../assets/styles/components/Ink.css';

const Ink = ({quantity, types, data, placeholders, fieldNames, labels}) => {
  const dispatch = useDispatch()

  let totalClothes = useSelector(state => state.orderSummary.totalClothes)
  let extraClothesTotal = useSelector(state => state.orderSummary.extraClothesTotal)
  let oneKgPrice = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.oneKgPrice)
  let realInput = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.input)
  let quantityToBuy = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.quantityToBuy)
  let inputPrice = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.totalPrice)
  
  let inputTypes = types
  let inputData = data
  let inputPlaceholders = placeholders
  let inputFields = fieldNames
  let inputLabels = labels

  const handleInput = (e, fieldName, index) => {
    let regex = /^\d+$/
    let value = e.target.value.match(regex) ? parseInt(e.target.value) : e.target.value

    let data = [quantity, fieldName, value]
    dispatch(changeInk(data))
  }

  useEffect(() => {
    let realInput = (totalClothes+extraClothesTotal)*0.02
    let roundValue = roundToNearestQuarter(realInput)
    let subtotal = oneKgPrice*quantityToBuy
    
    dispatch(updateInkDependencie([quantity, 'input', parseFloat(realInput).toFixed(2)]))
    dispatch(updateInkDependencie([quantity, 'quantityToBuy', parseFloat(roundValue).toFixed(2)]))
    dispatch(updateInkDependencie([quantity, 'totalPrice', parseFloat(subtotal).toFixed(2)]))
  }, [extraClothesTotal, oneKgPrice, quantityToBuy])

  const roundToNearestQuarter = (number) => {
    var quarter = 0.25;
    return Math.ceil(number/quarter) * quarter;
  }
  
  return (
    <>
    <div id="" className="production__inputs-wrapper">

      <div key={`production__inputs-wrapper-${quantity}`} id="" className="input-wrapper">
          {inputFields === 'input' || inputFields === 'quantityToBuy' || inputFields === 'totalPrice' 
            ?
            <p 
              key={`production__inputs-${quantity}`}
              data-number={quantity} 
              data-name={inputFields}
              type={types} 
              className={`${inputData}-production__inputs`} 
              placeholder={inputPlaceholders} 
              onInput={(e) => handleInput(e, inputFields)}
            >
              {inputFields === 'input' && realInput}
              {inputFields === 'quantityToBuy' && quantityToBuy}
              {inputFields === 'totalPrice' && inputPrice}
            </p>
            : 
            <input 
              key={`production__inputs-${quantity}`}
              data-number={quantity} 
              data-name={inputFields}
              type={types} 
              className={`${inputData}-production__inputs`} 
              placeholder={inputPlaceholders} 
              onInput={(e) => handleInput(e, inputFields)}
            >
            </input>
          }
        <label key={`input-label-${quantity}`} className='input-label'>{inputLabels}</label>
        </div>
      
    </div>
    </>
  )
};

export default Ink;
