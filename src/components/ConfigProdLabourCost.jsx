import React from 'react';
import ConfigurableInputs from './ConfigurableInputs';
import '../assets/styles/components/ConfigurableInputs.css';

const ConfigProdLabourCosts = () => {
  
  return (
    <section className='config-wrapper' >
      <h3 className='config-title'>Costo de mano de obra</h3>
      <div className='config-inputs__wrapper'>
        <ConfigurableInputs type={'number'} data={'printing'} placeholder={1} label={'Impresión'} level={'prodLabourCosts'} />
        <ConfigurableInputs type={'number'} data={'preDrying'} placeholder={1} label={'Presecado'} level='prodLabourCosts' />
        <ConfigurableInputs type={'number'} data={'ironing'} placeholder={1} label={'Planchado'} level={'prodLabourCosts'} />
        <ConfigurableInputs type={'number'} data={'package'} placeholder={1} label={'Empaque'} level={'prodLabourCosts'} />
      </div>
    </section>
  )
};

export default ConfigProdLabourCosts;