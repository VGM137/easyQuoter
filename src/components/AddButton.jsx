import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClothes } from '../actions';
import '../assets/styles/components/AddButton.css';

const AddButton = ({component, text}) => {

  let dispatch = useDispatch()

  const handleClick = () => {
    if(component === 'newClothes'){
      let data = {type: '',cut: '',color: '',size: '',material: '',brand: '',quantity: 0,extra: 0,unitPrice: 0,totalPrice: 0,digitalWork: 0,logistics: 0,testInputs: 0,inkInput: 0,prePostProdInputs: 0,prodLabour: 0,prePosProdLabour: 0,costWOGarmant: 0,unitCostWOGarmant: 0,prodTotalCost: 0,prodUnitCost: 0,profit: 0,price: 0,taxes: 0,USale: 0,UQuote: 0,algarin: 0}
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