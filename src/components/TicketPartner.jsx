import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/components/Ticket.css';

const TicketPartner = () => {

  const [saleArray, setSale] = useState([])
  const [totalsArray, setTotals] = useState([])
  const [labourCostArray, setLabourCost] = useState([])
  const [prePosLabourCostArray, setPrePosLabourCost] = useState([])

  let dispatch = useDispatch()
  let clothes = useSelector(state => state.serigraphyOrder.clothes)
  let orderSummary = useSelector(state => state.orderSummary)

  const formatOptions = { style: 'currency', currency: 'MXN' };
  const currencyFormat = new Intl.NumberFormat('es-MX', formatOptions)

  useEffect (() => {
    let sale = []
    let totalCost = []
    let totalLabourCost = []
    let totalPrePosLabourCost = []
    clothes.map(clothes => {
      sale.push(clothes.USale*clothes.quantity || 0)
      totalCost.push(clothes.prodTotalCost || 0)
      totalLabourCost.push(clothes.prodLabour || 0)
      totalPrePosLabourCost.push(clothes.prePosProdLabour || 0)
    })
    setSale(sale)
    setTotals(totalCost)
    setLabourCost(totalLabourCost)
    setPrePosLabourCost(totalPrePosLabourCost)
  }, [clothes])

  return (
    <section className="ticket-partner__wrapper">
      <div className='ticket-partner__garment'>
      {clothes.map((clothes, i) => {
        return <div key={`ticket-partner-${i}`} className='ticket-partner__content'>
          <p key={`ticket-type-${i}`}>{clothes.type}</p>
          <p key={`ticket-sale-${i}`}>{parseFloat(saleArray[i]).toFixed(2)}</p>
          <p key={`ticket-profit-${i}`}>{parseFloat(clothes.prodUnitCost*orderSummary.profit).toFixed(2)}</p>
          <p key={`ticket-cost-${i}`}>{parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*orderSummary.profit)).toFixed(2)}</p>
        </div>
      })}
      </div>
      <div className='ticket-partner__totals'>
        <p className='ticket-partner__totals--title'>{'Venta'}</p>
        <p className='ticket-partner__totals--quantity'>{currencyFormat.format(saleArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-partner__totals'>
        <p className='ticket-partner__totals--title'>{'Costo total'}</p>
        <p className='ticket-partner__totals--quantity'>{currencyFormat.format(totalsArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-partner__totals'>
        <p className='ticket-partner__totals--title'>{'Resta'}</p>
        <p className='ticket-partner__totals--quantity'>{currencyFormat.format((saleArray.reduce((a,b) =>  a = a + b , 0 ))-(totalsArray.reduce((a,b) =>  a = a + b , 0 )))}</p>
      </div>
      <div className='ticket-partner__totals'>
        <p className='ticket-partner__totals--title'>{'MO Prod'}</p>
        <p className='ticket-partner__totals--quantity'>{currencyFormat.format(labourCostArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-partner__totals'>
        <p className='ticket-partner__totals--title'>{'MO pre/pos'}</p>
        <p className='ticket-partner__totals--quantity'>{currencyFormat.format(prePosLabourCostArray.reduce((a,b) =>  a = a + b , 0 ))}</p>
      </div>
      <div className='ticket-partner__totals'>
        <p className='ticket-partner__totals--title'>{'Utilidad 1'}</p>
        <p className='ticket-partner__totals--quantity'>{currencyFormat.format(((saleArray.reduce((a,b) =>  a = a + b , 0 ))-(totalsArray.reduce((a,b) =>  a = a + b , 0 ))) + (labourCostArray.reduce((a,b) =>  a = a + b , 0 )) + (prePosLabourCostArray.reduce((a,b) =>  a = a + b , 0 )))}</p>
      </div>
    </section>
  )
};

export default TicketPartner;