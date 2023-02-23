import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClothes } from '../actions';
import '../assets/styles/components/AddButton.css';

const AddButton = ({component, text}) => {

  let dispatch = useDispatch()

  const handleClick = () => {
/*     if(component === 'extraClothes'){
      let data = {groupName:'', groupValue:0}
      dispatch(addExtraClothes(data)) */
    /* }else */ 
    if(component === 'newClothes'){
      let data = {type: '', cut: '', color: '', size: '', material: '', brand: '', quantity: '', unitPrice: ''}
      dispatch(addClothes(data))
    }
  }
  
  return (
    <div className='add-button__wrapper'>
      <button className='add-button' onClick={() => handleClick()}>{text}</button>
    </div>

  )
};

export default AddButton;