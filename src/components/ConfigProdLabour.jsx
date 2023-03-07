import React from 'react';
import ConfigurableInputs from './ConfigurableInputs';
import '../assets/styles/components/ConfigurableInputs.css';

const ConfigProdLabour = () => {
  
  return (
    <section className='config-wrapper' >
      <h3 className='config-title'>Tiempos de mano de obra en pre/pos prod.</h3>
      <div className='config-inputs__wrapper'>
        <ConfigurableInputs type={'number'} data={'minimumWage'} placeholder={1} label={'Salario mínimo'} level={'prePosProdLabour'} />
        <ConfigurableInputs type={'number'} data={'meshRecovery'} placeholder={1} label={'Rec de malla'} level='prePosProdLabour' />
        <ConfigurableInputs type={'number'} data={'graphicProcessing'} placeholder={1} label={'Revelado'} level={'prePosProdLabour'} />
        <ConfigurableInputs type={'number'} data={'register'} placeholder={1} label={'Registro'} level={'prePosProdLabour'} />
        <ConfigurableInputs type={'number'} data={'cleaning'} placeholder={1} label={'Limpieza'} level={'prePosProdLabour'} />
        <ConfigurableInputs type={'number'} data={'other'} placeholder={1} label={'Otros'} level={'prePosProdLabour'} />
      </div>
    </section>
  )
};

export default ConfigProdLabour;