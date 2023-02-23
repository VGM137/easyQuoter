import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* import { changeGroupedInput } from '../actions'; */
import '../assets/styles/components/ExtraClothes.css';

const ExtraClothes = ({quantity, types, data, placeholders}) => {
  const dispatch = useDispatch()
  const clothName = useSelector(state => state.orderSummary.extraClothes[quantity].groupName)
  const clothPrice = useSelector(state => state.orderSummary.extraClothes[quantity].groupValue)
  
  let inputTypes = types.split(',')
  let inputData = data.split(',')
  let inputPlaceholders = placeholders.split(',')

  const handleInput = (e, index) => {
    let regex = /^\d+$/
    let value = e.target.value.match(regex) ? parseInt(e.target.value) : e.target.value
    if(index == 0){
      let value = [quantity, {groupName: e.target.value, groupValue: clothPrice}]
      dispatch(changeGroupedInput(value))
    }else{
      let value = [quantity, {groupName: clothName,groupValue: e.target.value}]
      dispatch(changeGroupedInput(value))
    }
  }
  
  return (
    <>
    {quantity === 0 &&
      <div className='extra-clothes__titles'>
        <h3 className='extra-clothes__name'>Prenda</h3>
        <h3 className='extra-clothes__price'>Precio</h3>
      </div>
    }
    <div id="" className="extra-clothes__wrapper">
      {inputTypes.map((type, index) => {
        return <div key={`extra-clothes-wrapper-${quantity}-${index}`} id="" className="extra-clothes__input-wrapper"><input 
          key={`extra-clothes-${quantity}-${index}`}
          data-number={quantity} 
          type={type} 
          className={`${inputData[index]}-input__group`} 
          placeholder={inputPlaceholders[index]} 
          onInput={(e) => handleInput(e, index)}
        >
        </input></div>
      })}
      <div className='extra-clothes__button-wrapper'>
        <button className='extra-clothes__delete'>X</button>
      </div>
    </div>
    </>
  )
};


export default ExtraClothes;
