import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteClothes } from '../actions';
import '../assets/styles/components/AddButton.css';

const SerigraphyClothesHeader = ({quantity}) => {

  const clothesArray = useSelector(state => state.serigraphyOrder?.clothes)

  let dispatch = useDispatch()

  const handleClick = (e, quantity) => {
    dispatch(deleteClothes(quantity))
  }
  
  return (
    <div className='serigraphy-clothes__header' >
      <h3 className='serigraphy-clothes__title'>{`Prenda ${quantity+1}`}</h3>
      {clothesArray.length > 1 &&
        <button className='serigraphy-clothes__delete' onClick={(e) => handleClick(e, quantity)}>Borrar</button>
      }
    </div>
  )
};

export default SerigraphyClothesHeader;