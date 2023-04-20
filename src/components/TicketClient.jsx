import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeOrderSummary } from '../actions';
import ClothesInput from './ClothesInput';
import TicketLineItem from './TicketLineItem';
import '../assets/styles/components/TicketClient.css';

const TicketClient = () => {

  const [saleArray, setSale] = useState([])
  const [totalsArray, setTotals] = useState([])
  const [labourCostArray, setLabourCost] = useState([])
  const [prePosLabourCostArray, setPrePosLabourCost] = useState([])
  /* const [ticketCost, setTicketCost] = useState([]) */

  let dispatch = useDispatch()
  let clothes = useSelector(state => state.serigraphyOrder.clothes)

  const formatOptions = { style: 'currency', currency: 'MXN' };
  const currencyFormat = new Intl.NumberFormat('es-MX', formatOptions)

  useEffect (() => {
    let sale = []
    let totalCost = []
    let totalLabourCost = []
    let totalPrePosLabourCost = []
    clothes.map((clothes, i) => {
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
    let profit2 = ((saleArray.reduce((a,b) =>  a = a + b , 0 ))-(totalsArray.reduce((a,b) =>  a = a + b , 0 ))) + (labourCostArray.reduce((a,b) =>  a = a + b , 0 )) + (prePosLabourCostArray.reduce((a,b) =>  a = a + b , 0 ))
    dispatch(changeOrderSummary('profitTwo', parseFloat(profit2)))
  }, [clothes])


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
        return <TicketLineItem key={`line-item-${i}`} index={i} />
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