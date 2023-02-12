import React from 'react';
import { connect } from 'react-redux'
import OrderSummary from '../components/OrderSummary';
import SerigraphyOrder from '../components/SerigraphyOrder';
import '../assets/styles/App.css'

const Home = () => {


  return (
    <>
    <main id='principal' className='principal'> 
      <OrderSummary />
      <SerigraphyOrder />
    </main>
    </>
  )
};


export default connect(null, null)(Home);
