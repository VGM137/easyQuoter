import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InkInput from './InkInput';
import '../assets/styles/components/OrderProductionInputs.css';

const OrderProductionInputs = () => {

  const [inputsArray,setInputsArray]=useState([])

  let colors = useSelector(state => state.orderSummary.totalColors)
  let productionInputs = useSelector(state => state.serigraphyOrder.productionInputs)
  
  useEffect(() => {
    console.log('effect')
    let renderArray = productionInputs.map((input, index) => {
      console.log(index)
      
      return <div key={`ink-wrapper-${index}`} id="" className="production__inputs-wrapper">
                <h3 key={`ink-title-${index}`} className='production-input__title'>{`Tinta ${index+1}`}</h3>
                <InkInput key={`ink-${`ink-color`}-${index}`} quantity={index} type={'text'} data={`ink-color`} placeholder={'Rojo'}label={'Color'}fieldName='ink' />
                <InkInput key={`ink-${`quarter-input`}-${index}`} quantity={index} type={'number'} data={`quarter-input`} placeholder={'25'}label={'Precio 1/4'}fieldName='quarterKgPrice' />
                <InkInput key={`ink-${`k-input`}-${index}`} quantity={index} type={'number'} data={`k-input`} placeholder={'100'}label={'Precio 1k'}fieldName='oneKgPrice' />
                <InkInput key={`ink-${`input-quantity`}-${index}`} quantity={index} type={'number'} data={`input-quantity`} placeholder={'1.6'}label={'Insumo'}fieldName='input' />
                <InkInput key={`ink-${`input-tobuy`}-${index}`} quantity={index} type={'number'} data={`input-tobuy`} placeholder={'2'}label={'Comprar'}fieldName='quantityToBuy' />
                <InkInput key={`ink-${`subtotal`}-${index}`} quantity={index} type={'number'} data={`subtotal`} placeholder={'200'}label={'Subtotal'}fieldName='totalPrice' />
              </div>
              
      
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

