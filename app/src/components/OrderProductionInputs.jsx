import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Ink from './Ink';
import '../assets/styles/components/OrderProductionInputs.css';

const OrderProductionInputs = () => {

  const [inputsArray,setInputsArray]=useState([])

  let colors = useSelector(state => state.orderSummary.totalColors)
  let productionInputs = useSelector(state => state.serigraphyOrder.productionInputs)
  
  useEffect(() => {
    console.log('effect')
    let renderArray = productionInputs.map((input, index) => {
      console.log(index)
      return <Ink 
              key={`ink-input-${index}`} 
              quantity={index} 
              types={'text,number,number,number,number,number'} 
              data={`ink-color,quarter-input,k-input,input-quantity,input-tobuy,subtotal`} 
              placeholders={'Rojo,25,100,1.6,2,200'}
              labels={'Color,Precio 1/4,Precio 1k,Insumo,Comprar,Subtotal'}
              fieldNames='ink,quarterKgPrice,oneKgPrice,input,quantityToBuy,totalPrice' />
    });
    setInputsArray(renderArray)
  }, [colors])
  
  return (
    <section id="OrderProductionInputs" className="production-inputs__container container-wrapper">
      {inputsArray}
    </section>
  )
};

export default OrderProductionInputs;