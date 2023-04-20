import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateClothesDependencie } from '../actions';
import InkInput from './InkInput';
import ClothesInput from './ClothesInput';
import '../assets/styles/components/OrderProductionInputs.css';

const TicketLineItem = ({index}) => {

  const dispatch = useDispatch()

  let clothes = useSelector(state => state.serigraphyOrder?.clothes[index])
  let productionInputs = useSelector(state => state.serigraphyOrder.productionInputs)
  let orderSummary = useSelector(state => state.orderSummary)
  let clientCode = orderSummary.clientCode
  let clothingCode = orderSummary.clothingCode
  let dueDateCode = orderSummary.dueDateCode


  let profit = (clientCode/10)+((clothingCode*clothingCode)/10)+((dueDateCode*dueDateCode)/10)

  
  useEffect(() => {
    console.log(index)
    dispatch(updateClothesDependencie([index, 'UQuote', roundToNearestFive(parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2))]))
  }, [ productionInputs])

  function roundToNearestFive(number) {
    return Math.ceil(number / 5) * 5;
  }
  
  return (

      <div key={`ticket-client-${index}`} className='ticket-client__content'>
        <p key={`ticket-type-${index}`}>{clothes.type}</p>
        <p key={`ticket-profit-${index}`}>{parseFloat(clothes.prodUnitCost*profit).toFixed(2)}</p>
        <p key={`ticket-cost-${index}`} className='ticket-cost'>{parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2)}</p>
        <ClothesInput key={`clothes-clothes-365quote-${index}`} quantity={index} type={'number'} data={`clothes-365quote`} placeholder={'140'}label={'Cotización 365'}fieldName='UQuote' />
        <p key={`ticket-subtotal-${index}`}>{parseFloat(clothes.UQuote*clothes.quantity).toFixed(2)}</p>
      </div>

  )
};

export default TicketLineItem;

