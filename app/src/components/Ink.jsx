import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInk, updateInkDependencie } from '../actions';
import '../assets/styles/components/Ink.css';

const Ink = ({quantity, types, data, placeholders, fieldNames, labels}) => {
  const dispatch = useDispatch()

  let totalClothes = useSelector(state => state.orderSummary.totalClothes)
  let oneKgPrice = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.oneKgPrice)
  let realInput = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.input)
  let quantityToBuy = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.quantityToBuy)
  let inputPrice = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.totalPrice)
  
  let inputTypes = types.split(',')
  let inputData = data.split(',')
  let inputPlaceholders = placeholders.split(',')
  let inputFields = fieldNames.split(',')
  let inputLabels = labels.split(',')

  const handleInput = (e, fieldName, index) => {
    let regex = /^\d+$/
    let value = e.target.value.match(regex) ? parseInt(e.target.value) : e.target.value

    let data = [quantity, fieldName, value]
    dispatch(changeInk(data))
  }

  useEffect(() => {
    let realInput = totalClothes*0.02
    let roundValue = roundToNearestQuarter(realInput)
    let subtotal = oneKgPrice*quantityToBuy
    
    dispatch(updateInkDependencie([quantity, 'input', realInput]))
    dispatch(updateInkDependencie([quantity, 'quantityToBuy', roundValue]))
    dispatch(updateInkDependencie([quantity, 'totalPrice', subtotal]))
  }, [totalClothes, oneKgPrice, quantityToBuy])

  const roundToNearestQuarter = (number) => {
    var quarter = 0.25;
    return Math.ceil(number/quarter) * quarter;
  }
  
  return (
    <>
    <div id="" className="production__inputs-wrapper">
      <h3 className='production-input__title'>{`Tinta ${quantity+1}`}</h3>
      {inputTypes.map((type, index) => {
        return <div key={`production__inputs-wrapper-${quantity}-${index}`} id="" className="input-wrapper">
          {inputFields[index] === 'input' || inputFields[index] === 'quantityToBuy' || inputFields[index] === 'totalPrice' 
            ?
            <p 
              key={`production__inputs-${quantity}-${index}`}
              data-number={quantity} 
              data-name={inputFields[index]}
              type={type} 
              className={`${inputData[index]}-production__inputs`} 
              placeholder={inputPlaceholders[index]} 
              onInput={(e) => handleInput(e, inputFields[index], index)}
            >
              {inputFields[index] === 'input' && realInput}
              {inputFields[index] === 'quantityToBuy' && quantityToBuy}
              {inputFields[index] === 'totalPrice' && inputPrice}
            </p>
            : 
            <input 
              key={`production__inputs-${quantity}-${index}`}
              data-number={quantity} 
              data-name={inputFields[index]}
              type={type} 
              className={`${inputData[index]}-production__inputs`} 
              placeholder={inputPlaceholders[index]} 
              onInput={(e) => handleInput(e, inputFields[index], index)}
            >
            
            </input>
          }
        <label key={`input-label-${quantity}-${index}`} className='input-label'>{inputLabels[index]}</label>
        </div>
      })}
    </div>
    </>
  )
};

export default Ink;
