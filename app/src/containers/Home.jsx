import React from 'react';
import { connect } from 'react-redux'
import VistaPrevia from '../components/VistaPrevia';
import '../assets/styles/App.css'

const Home = () => {


  return (
    <>
    <main id='principal' className='principal'> 
      <VistaPrevia />
    </main>
    </>
  )
};


export default connect(null, null)(Home);
