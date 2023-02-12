import React from 'react';
import { useSelector } from 'react-redux';
import Clothes from './Clothes';
import AddButton from './AddButton';
import '../assets/styles/components/SerigraphyOrder.css';

const SerigraphyOrder = () => {
  let clothes = useSelector(state => state.serigraphyOrder.clothes)
  
  return (
    <section id="SerigraphyOrder" className="serigraphy-order__wrapper container-wrapper">
      {
        clothes.map((clothes, index) => {
          return <Clothes 
          key={`clothes-order-${index}`} 
          quantity={index} 
          types={'text,text,text,text,text,text,number,number'} 
          data={`clothes-type,clothes-cut,clothes-color,clothes-size,clothes-material,clothes-brand,clothes-quantity,clothes-unitPrice`} 
          placeholders={'Playera,Negro,Manga corta,M,Algodón,M&O,12,52'}
          labels={'Tipo de prenda,Color,Corte,Tamaño,Material,Marca,Cantidad,Precio unitario'}
          fieldNames='type,cut,color,size,material,brand,quantity,unitPrice' />
        })
      }
      <AddButton component={'newClothes'} text={'Nueva prenda'} />
    </section>

  )
};

export default SerigraphyOrder;