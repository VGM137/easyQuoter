import React from 'react';
import ConfigurableInputs from './ConfigurableInputs';
import '../assets/styles/components/ConfigurableInputs.css';

const ConfigProdLabourTime = () => {
  
  return (
    <section className='config-wrapper' >
      <h3 className='config-title'>Tiempos de mano de obra</h3>
      <div className='config-inputs__wrapper'>
        <ConfigurableInputs type={'number'} data={'printing'} placeholder={1} label={'Impresión'} level={'prodLabourTime'} />
        <ConfigurableInputs type={'number'} data={'preDrying'} placeholder={1} label={'Presecado'} level='prodLabourTime' />
        <ConfigurableInputs type={'number'} data={'ironing'} placeholder={1} label={'Planchado'} level={'prodLabourTime'} />
        <ConfigurableInputs type={'number'} data={'package'} placeholder={1} label={'Empaque'} level={'prodLabourTime'} />
      </div>
    </section>
  )
};

export default ConfigProdLabourTime;