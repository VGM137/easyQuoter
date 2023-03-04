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
      return <>
      <h3 className='production-input__title'>{`Tinta ${index+1}`}</h3>

        <Ink key={`ink-input-${index}`} quantity={index} types={'text'} data={`ink-color`} placeholders={'Rojo'}labels={'Color'}fieldNames='ink' />
        <Ink key={`ink-input-${index}`} quantity={index} types={'number'} data={`quarter-input`} placeholders={'25'}labels={'Precio 1/4'}fieldNames='quarterKgPrice' />
        <Ink key={`ink-input-${index}`} quantity={index} types={'number'} data={`k-input`} placeholders={'100'}labels={'Precio 1k'}fieldNames='oneKgPrice' />
        <Ink key={`ink-input-${index}`} quantity={index} types={'number'} data={`input-quantity`} placeholders={'1.6'}labels={'Insumo'}fieldNames='input' />
        <Ink key={`ink-input-${index}`} quantity={index} types={'number'} data={`input-tobuy`} placeholders={'2'}labels={'Comprar'}fieldNames='quantityToBuy' />
        <Ink key={`ink-input-${index}`} quantity={index} types={'number'} data={`subtotal`} placeholders={'200'}labels={'Subtotal'}fieldNames='totalPrice' />
        </>
      
    });
    setInputsArray(renderArray)
  }, [colors])
  
  return (
    <>
      {colors > 0 &&
        <section id="OrderProductionInputs" className="production-inputs__container container-wrapper">
          {inputsArray}
        </section>
      }
    </>
  )
};

export default OrderProductionInputs;

