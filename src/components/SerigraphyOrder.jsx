import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSerygraphyOrderCard } from '../actions';
import AddButton from './AddButton';
import SerigraphyOrderCosts from './SerigraphyOrderCosts';
import SerigraphyOrderInputs from './SerigraphyOrderInputs';
import '../assets/styles/components/SerigraphyOrder.css';

const SerigraphyOrder = () => {
  let showSerigraphyCard = useSelector(state => state.showSerigraphyCard)

  const dispatch = useDispatch()

  const handleClick = (e) => {
    let payload
    showSerigraphyCard === true ? payload = false : payload = true
    dispatch(changeSerygraphyOrderCard(payload))
  }
  
  return (
    <section id="SerigraphyOrder" className="serigraphy-order__wrapper container-wrapper">
      <button className='serigraphy-order__see-button' onClick={(e) => handleClick()}>{showSerigraphyCard ? 'Ver costos' : 'Ver productos'}</button>
      {showSerigraphyCard 
        ?
        <SerigraphyOrderInputs />
        :
        <SerigraphyOrderCosts />
      }
      <AddButton component={'newClothes'} text={'Nueva prenda'} />
    </section>

  )
};

export default SerigraphyOrder;