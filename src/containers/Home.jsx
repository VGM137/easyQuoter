import React from 'react';
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Configurations from '../components/Configurations';
import OrderSummary from '../components/OrderSummary';
import SerigraphyOrder from '../components/SerigraphyOrder';
import OrderProductionInputs from '../components/OrderProductionInputs';
import Ticket from '../components/Ticket';
import '../assets/styles/App.css'

const Home = () => {

  const showConfigurationsState = useSelector(state => state.showConfigurations)

  return (
    <>
    <main id='principal' className='principal'> 
      <Header />
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
