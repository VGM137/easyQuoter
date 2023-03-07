import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInk, updateInkDependencie } from '../actions';
import '../assets/styles/components/Ink.css';

const InkInput = ({quantity, type, data, placeholder, fieldName, label}) => {
  const dispatch = useDispatch()

  let totalClothes = useSelector(state => state.orderSummary.totalClothes)
  let extraClothesTotal = useSelector(state => state.orderSummary.extraClothesTotal)

  let productInputs = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.[fieldName])
  let oneKgPrice = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.oneKgPrice)
  let realInput = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.input)
  let quantityToBuy = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.quantityToBuy)
  let inputPrice = useSelector(state => state.serigraphyOrder?.productionInputs[quantity]?.totalPrice)
  
  const handleInput = (e, fieldName, index) => {
    let regex = /(?:[1-9][0-9]*|0)(?:\/[1-9][0-9]*)?/
    let value = e.target.value.match(regex) ? parseFloat(e.target.value) : e.target.value
    
    let data = [quantity, fieldName, value]
    dispatch(changeInk(data))
  }
  
  useEffect(() => {
    let realInput = (totalClothes+extraClothesTotal)*0.02
    let roundValue = roundToNearestQuarter(realInput)
    let subtotal = oneKgPrice*quantityToBuy
    console.log(typeof realInput)
    
    dispatch(updateInkDependencie([quantity, 'input', realInput.toFixed(2)]))
    dispatch(updateInkDependencie([quantity, 'quantityToBuy', parseFloat(roundValue).toFixed(2)]))
    dispatch(updateInkDependencie([quantity, 'totalPrice', parseFloat(subtotal).toFixed(2)]))
  }, [extraClothesTotal, oneKgPrice, quantityToBuy])

  const roundToNearestQuarter = (number) => {
    var quarter = 0.25;
    return Math.ceil(number/quarter) * quarter;
  }
  
  return (
    <>
      <div key={`production__inputs-wrapper-${fieldName}-${quantity}`} id="" className="input-wrapper">
        {fieldName === 'input' || fieldName === 'quantityToBuy' || fieldName === 'totalPrice' 
          ?
          <p 
            key={`production__inputs-${fieldName}-${quantity}`}
            data-number={quantity} 
            data-name={fieldName}
            type={type} 
            className={`${data}-production__inputs`} 
            placeholder={placeholder} 
            
            
          >
            {fieldName === 'input' && parseFloat(realInput).toFixed(2) || ''}
            {fieldName === 'quantityToBuy' && parseFloat(quantityToBuy).toFixed(2) || ''}
            {fieldName === 'totalPrice' && parseFloat(inputPrice).toFixed(2) || ''}
          </p>
          : 
          <input 
            key={`production__inputs-${fieldName}-${quantity}`}
            data-number={quantity} 
            data-name={fieldName}
            type={type} 
            className={`${data}-production__inputs`} 
            placeholder={placeholder} 
            onInput={(e) => handleInput(e, fieldName)}
            value={productInputs || ''}
          >
          </input>
        }
        <label key={`input-label-${quantity}`} className='input-label'>{label}</label>
      </div>
    </>
  )
};

export default InkInput;
