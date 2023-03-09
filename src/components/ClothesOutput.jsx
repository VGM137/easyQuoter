import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClothes } from '../actions';
import '../assets/styles/components/AddButton.css';

const ClothesOutput = ({index, component, label}) => {
  
  return (
    <div className='input-wrapper' key={`${component}-${index}-wrapper`}>
      <p key={`clothes-${component}-cost-${index}`} >{component}</p>
      <label key={`clothes-label-${component}-${index}`} className='input-label'>{label}</label>
    </div>

  )
};

export default ClothesOutput;