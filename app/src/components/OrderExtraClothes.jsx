import React from 'react';
import { useSelector } from 'react-redux';
import Input from './Input';
import ExtraClothes from './ExtraClothes';
import AddButton from './AddButton';
import '../assets/styles/components/OrderSummary.css';

const OrderExtraClothes = () => {
  let extraClothes = useSelector(state => state.orderSummary.extraClothes)
  
  return (
    <section id="OrderExtraClothes" className="order-extra__clothes-wrapper container-wrapper">
      <div className='order-summary__extra-clothes'>
        {
          extraClothes.map((clothes, index) => {
            return <ExtraClothes key={`clothes-group-${index}`} quantity={index} types={'text,number'} data={`extra-clothes__name,extra-clothes__value`} placeholders={'playera,54'} />
          })
        }
        <AddButton component={'extraClothes'} text={'Añadir prenda extra'} />
      </div>
    </section>

  )
};

export default OrderExtraClothes;