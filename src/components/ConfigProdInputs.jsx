import React from 'react';
import ConfigurableInputs from './ConfigurableInputs';
import '../assets/styles/components/AddButton.css';

const ConfigProdInputs = () => {
  
  return (
    <section id="SerigraphyOrder" className="serigraphy-order__wrapper container-wrapper">
      <ConfigurableInputs type={'number'} data={'frameWear'} placeholder={1} label={'Marco'} level={'prePosProdInputs'} />
      <ConfigurableInputs type={'number'} data={'photolith'} placeholder={1} label={'Fotolito'} level='prePosProdInputs' />
      <ConfigurableInputs type={'number'} data={'emulsion'} placeholder={1} label={'Emulsión'} level={'prePosProdInputs'} />
      <ConfigurableInputs type={'number'} data={'degreaser'} placeholder={1} label={'Desengrasante'} level={'prePosProdInputs'} />
      <ConfigurableInputs type={'number'} data={'emulsionRemover'} placeholder={1} label={'Removedor de emulsión'} level={'prePosProdInputs'} />
      <ConfigurableInputs type={'number'} data={'ghostRemover'} placeholder={1} label={'Quitafantasma'} level={'prePosProdInputs'} />
    </section>
  )
};

export default ConfigProdInputs;