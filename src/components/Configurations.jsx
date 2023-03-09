import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigProdInputs from './ConfigProdInputs';
import ConfigProdLabour from './ConfigProdLabour';
import ConfigProdLabourCosts from './ConfigProdLabourCost';
import ConfigProdLabourTime from './ConfigProdLabourTime';
import '../assets/styles/components/Configurations.css';

const Configurations = ({}) => {

  return (
    <>
      <ConfigProdInputs />
      <ConfigProdLabour />
      <ConfigProdLabourCosts />
      <ConfigProdLabourTime />
    </>
  )
};

export default Configurations;