import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClothesInput from './ClothesInput';
/* import '../assets/styles/components/TicketClient.css'; */

const TicketAlgarin = () => {

  const [saleArray, setSale] = useState([])
  const [clientSaleArray, setSaleClient] = useState([])
  const [partnerSaleArray, setSalePartner] = useState([])
/*   const [totalsArray, setTotals] = useState([])
  const [labourCostArray, setLabourCost] = useState([])
  const [prePosLabourCostArray, setPrePosLabourCost] = useState([]) */

/*   let dispatch = useDispatch() */
  let clothes = useSelector(state => state.serigraphyOrder.clothes)
/*   let partenerProfit = useSelector(state => state.orderSummary.profitOne)
  let clientProfit = useSelector(state => state.orderSummary.profitTwo) */

  const formatOptions = { style: 'currency', currency: 'MXN' };
/*   const currencyFormat = new Intl.NumberFormat('es-MX', formatOptions) */

  useEffect (() => {
    let saleAlgarin = []
    let saleClient = []
    let salePartner = []
/*     let totalCost = []
    let totalLabourCost = []
    let totalPrePosLabourCost = [] */
    clothes.map((clothes, i) => {
      /* dispatch(updateClothesDependencie(i, 'UQuote', roundToNearestFive(parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2)))) */
      saleAlgarin.push(clothes.algarin*clothes.quantity || 0)
      saleClient.push(clothes.UQuote*clothes.quantity || 0)
      salePartner.push(clothes.USale*clothes.quantity || 0)
/*       totalCost.push(clothes.prodTotalCost || 0)
      totalLabourCost.push(clothes.prodLabour || 0)
      totalPrePosLabourCost.push(clothes.prePosProdLabour || 0) */
    })
    setSale(saleAlgarin)
    setSaleClient(saleClient)
    setSalePartner(salePartner)
    console.log(saleAlgarin)
    console.log(clientSaleArray)
    console.log(partnerSaleArray)
/*     
    setTotals(totalCost)
    setLabourCost(totalLabourCost)
    setPrePosLabourCost(totalPrePosLabourCost) */
    /* dispatch(updateClothesDependencie(, 'UQuote', roundToNearestFive(parseFloat(clothes.prodUnitCost+(clothes.prodUnitCost*profit)).toFixed(2)))) */
  }, [clothes])


  return (
    <section className="ticket-algarin__wrapper">
      <div className='ticket-algarin__header'>
        <h4>Prenda</h4>
        <h4>Algarín</h4> 
        <h4>Socio</h4>
        <h4>Externo</h4>
      </div>
      <div className='ticket-algarin__garment'>
      {clothes.map((clothes, i) => {
        return <div key={`ticket-algarin-${i}`} className='ticket-algarin__content'>
          <p key={`ticket-type-${i}`}>{clothes.type}</p>
          <ClothesInput key={`clothes-clothes-365quote-${i}`} quantity={i} type={'number'} data={`clothes-algarin`} placeholder={'80'}label={'Algarín'}fieldName='algarin' />
          <p key={`ticket-profit-${i}`}>{parseFloat(saleArray[i]).toFixed(2)}</p>
          <ClothesInput key={`clothes-clothes-365sale-${i}`} quantity={i} type={'number'} data={`clothes-365sale`} placeholder={'350'}label={'Venta 365'}fieldName='USale' />
          <p key={`ticket-profit-${i}`}>{parseFloat(partnerSaleArray[i]).toFixed(2)}</p>
          <ClothesInput key={`clothes-clothes-365quote-${i}`} quantity={i} type={'number'} data={`clothes-365quote`} placeholder={'140'}label={'Cotización 365'}fieldName='UQuote' />
          <p key={`ticket-profit-${i}`}>{parseFloat(clientSaleArray[i]).toFixed(2)}</p>
        </div>
      })}
      </div>
      {/* <div className='ticket-client__totals'>
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
      </div> */}
    </section>
  )
};

export default TicketAlgarin;