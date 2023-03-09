import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateClothesDependencie } from '../actions';
import ClothesInput from './ClothesInput';
import '../assets/styles/components/TicketClient.css';

const TicketClient = () => {

  const [saleArray, setSale] = useState([])
  const [totalsArray, setTotals] = useState([])
  const [labourCostArray, setLabourCost] = useState([])
  const [prePosLabourCostArray, setPrePosLabourCost] = useState([])

  let dispatch = useDispatch()
  let clothes = useSelector(state => state.serigraphyOrder.clothes)
  let orderSummary = useSelector(state => state.orderSummary)
  let clientCode = orderSummary.clientCode
  let clothingCode = orderSummary.clothingCode
  let dueDateCode = orderSummary.dueDateCode

  let profit = (clientCode/10)+((clothingCode*clothingCode)/10)+((dueDateCode*dueDateCode)/10)
  console.log(profit)

  const formatOptions = { style: 'currency', currency: 'MXN' };
  const currencyFormat = new Intl.NumberFormat('es-MX', formatOptions)

  useEffect (() => {
    let sale = []
    let totalCost = []
    let totalLabourCost = []
    let totalPrePosLabourCost = []
    clothes.map((clothes, i) => {
      /* dispatch(updateClothesDependencie(i, 'UQuote', roundToNearestFive(parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2)))) */
      sale.push(clothes.UQuote*clothes.quantity || 0)
      totalCost.push(clothes.prodTotalCost || 0)
      totalLabourCost.push(clothes.prodLabour || 0)
      totalPrePosLabourCost.push(clothes.prePosProdLabour || 0)
    })
    setSale(sale)
    console.log(sale)
    setTotals(totalCost)
    setLabourCost(totalLabourCost)
    setPrePosLabourCost(totalPrePosLabourCost)
  }, [clothes])

  function roundToNearestFive(number) {
    return Math.ceil(number / 5) * 5;
  }

  return (
    <section className="ticket-client__wrapper">
      <div className='ticket-client__header'>
        <h4>Prenda</h4>
        <h4>Utilidad</h4>
        <h4>Precio</h4>
        <h4>Cot 365</h4>
        <h4>Subtotal</h4>
      </div>
      <div className='ticket-client__garment'>
      {clothes.map((clothes, i) => {
        return <div key={`ticket-client-${i}`} className='ticket-client__content'>
          <p key={`ticket-type-${i}`}>{clothes.type}</p>
          <p key={`ticket-profit-${i}`}>{parseFloat(clothes.prodUnitCost*profit).toFixed(2)}</p>
          <p key={`ticket-cost-${i}`}>{parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2)}</p>
          <ClothesInput key={`clothes-clothes-365quote-${i}`} quantity={i} type={'number'} data={`clothes-365quote`} placeholder={'140'}label={'Cotización 365'}fieldName='UQuote'value={roundToNearestFive(parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2))} />
          <p key={`ticket-subtotal-${i}`}>{parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2)}</p>
        </div>
      })}
      </div>
      <div className='ticket-client__totals'>
        <p className='ticket-client__totals--title'>{'Total'}</p>
        <p className='ticket-client__totals--quantity'>{currencyFormat.format(saleArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-client__totals'>
        <p className='ticket-client__totals--title'>{'Costo total'}</p>
        <p className='ticket-client__totals--quantity'>{currencyFormat.format(totalsArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-client__totals'>
        <p className='ticket-client__totals--title'>{'Utilidad'}</p>
        <p className='ticket-client__totals--quantity'>{currencyFormat.format((saleArray.reduce((a,b) =>  a = a + b , 0 ))-(totalsArray.reduce((a,b) =>  a = a + b , 0 )))}</p>
      </div>
      <div className='ticket-client__totals'>
        <p className='ticket-client__totals--title'>{'MO Prod'}</p>
        <p className='ticket-client__totals--quantity'>{currencyFormat.format(labourCostArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-client__totals'>
        <p className='ticket-client__totals--title'>{'MO pre/pos'}</p>
        <p className='ticket-client__totals--quantity'>{currencyFormat.format(prePosLabourCostArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-client__totals'>
        <p className='ticket-client__totals--title'>{'Utilidad 2'}</p>
        <p className='ticket-client__totals--quantity'>{currencyFormat.format(((saleArray.reduce((a,b) =>  a = a + b , 0 ))-(totalsArray.reduce((a,b) =>  a = a + b , 0 ))) + (labourCostArray.reduce((a,b) =>  a = a + b , 0 )) + (prePosLabourCostArray.reduce((a,b) =>  a = a + b , 0 )))}</p>
      </div>
    </section>
  )
};

export default TicketClient;