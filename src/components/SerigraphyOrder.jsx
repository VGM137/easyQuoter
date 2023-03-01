import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSerygraphyOrderCard } from '../actions';
import Clothes from './Clothes';
import AddButton from './AddButton';
import SerigraphyOrderCosts from './SerigraphyOrderCosts';
import '../assets/styles/components/SerigraphyOrder.css';

const SerigraphyOrder = () => {
  let showSerigraphyCard = useSelector(state => state.showSerigraphyCard)
  let clothes = useSelector(state => state.serigraphyOrder.clothes)

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
        clothes.map((clothes, index) => {
          return <Clothes 
          key={`clothes-order-${index}`} 
          quantity={index} 
          types={'text,text,text,text,text,text,text,number,number'} 
          data={`clothes-type,clothes-cut,clothes-color,clothes-size,clothes-material,clothes-brand,clothes-quantity,extra-garment,clothes-unitPrice`} 
          placeholders={'Playera,Negro,Manga corta,M,Algodón,M&O,12,1,52'}
          labels={'Tipo de prenda,Color,Corte,Tamaño,Material,Marca,Cantidad,Prenda extra,Precio unitario'}
          fieldNames='type,cut,color,size,material,brand,quantity,extra,unitPrice' />
        })
        :
        <SerigraphyOrderCosts  />
      }
      <AddButton component={'newClothes'} text={'Nueva prenda'} />
    </section>

  )
};

export default SerigraphyOrder;