import React from 'react';
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { showConfigurations } from '../actions';
import Configurations from '../components/Configurations';
import OrderSummary from '../components/OrderSummary';
import SerigraphyOrder from '../components/SerigraphyOrder';
import OrderProductionInputs from '../components/OrderProductionInputs';
import Ticket from '../components/Ticket';
import '../assets/styles/App.css'

const Home = () => {

  const showConfigurationsState = useSelector(state => state.showConfigurations)
  
  const dispatch = useDispatch()

  const handleClick = (e) => {
    let payload
    showConfigurationsState === true ? payload = false : payload = true
    dispatch(showConfigurations(payload))
  }

  return (
    <>
    <main id='principal' className='principal'> 
       <button className='serigraphy-order__see-button' onClick={(e) => handleClick(e)}>{showConfigurationsState ? 'Cotizador' : 'Configuraciones'}</button>
      {showConfigurationsState
        ?
          <Configurations />
        :
          <>
            <OrderSummary />
            <SerigraphyOrder />
            <OrderProductionInputs />
            <Ticket />
          </>
      }
    </main>
    </>
  )
};


export default connect(null, null)(Home);
