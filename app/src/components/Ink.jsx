import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInk } from '../actions';
import '../assets/styles/components/ExtraClothes.css';

const Ink = ({quantity, types, data, placeholders, fieldNames, labels}) => {
  const dispatch = useDispatch()
  
  let inputTypes = types.split(',')
  let inputData = data.split(',')
  let inputPlaceholders = placeholders.split(',')
  let inputFields = fieldNames.split(',')
  let inputLabels = labels.split(',')

  const handleInput = (e, fieldName, index) => {
    let value = e.target.value

    let data = [quantity, fieldName, value]
    dispatch(changeInk(data))
  }
  
  return (
    <>
    {quantity === 0 &&
      <div className='production-colors__titles'>
        <h3 className='production-colors__color'>Color</h3>
        <h3 className='production-colors__quarter'>Precio 1/4kg</h3>
        <h3 className='production-colors__k'>Precio 1kg</h3>
        <h3 className='production-colors__input'>Insumo</h3>
        <h3 className='production-colors__buy'>Compra</h3>
        <h3 className='production-colors__subtotal'>Subtotal</h3>
      </div>
    }
    <div id="" className="production__inputs-wrapper">
      {inputTypes.map((type, index) => {
        return <div key={`production__inputs-wrapper-${quantity}-${index}`} id="" className="production__inputs-wrapper input-wrapper"><input 
          key={`production__inputs-${quantity}-${index}`}
          data-number={quantity} 
          data-name={inputFields[index]}
          type={type} 
          className={`${inputData[index]}-production__inputs`} 
          placeholder={inputPlaceholders[index]} 
          onInput={(e) => handleInput(e, inputFields[index], index)}
        >
        </input>
        <label key={`input-label-${quantity}-${index}`} className='input-label'>{inputLabels[index]}</label>
        </div>
      })}
    </div>
    </>
  )
};

export default Ink;
