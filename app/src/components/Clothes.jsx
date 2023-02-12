import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderClothes } from '../actions';
import '../assets/styles/components/Clothes.css';

const Clothes = ({quantity, types, data, placeholders, fieldNames, labels}) => {
  const dispatch = useDispatch()
  const clothesElement = useSelector(state => state.serigraphyOrder.clothes[quantity])
  console.log(clothesElement)
  
  let inputTypes = types.split(',')
  let inputData = data.split(',')
  let inputPlaceholders = placeholders.split(',')
  let inputFields = fieldNames.split(',')
  let inputLabels = labels.split(',')

  const handleInput = (e, fieldName, index) => {
    console.log(fieldName)
    let value = e.target.value

    let data = [quantity, fieldName, value]
    dispatch(changeOrderClothes(data))

  }
  
  return (
    <>
    <div id="" className="serigraphy-clothes__wrapper">
      <h3 className='serigraphy-clothes__title'>{`Prenda ${quantity+1}`}</h3>
      {inputTypes.map((type, index) => {
        return <div className='clothes-wrapper'> <input 
          key={`clothes-${quantity}-${index}`}
          data-number={quantity}
          data-name={inputFields[index]}
          type={type} 
          className={`${inputData[index]}-input__group`} 
          placeholder={inputPlaceholders[index]} 
          onInput={(e) => handleInput(e, inputFields[index], index)}
        >
        </input>
        <label className='input-label'>{inputLabels[index]}</label>
        </div>
      })}
    </div>
    </>
  )
};


export default Clothes;
