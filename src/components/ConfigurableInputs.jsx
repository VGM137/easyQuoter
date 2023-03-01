import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configProdInputs, configProdLabour, configLabourCost, configLabourTime } from '../actions';
import '../assets/styles/components/Input.css';

const ConfigurableInputs = ({type, data, placeholder, label, level}) => {

  let dispatch = useDispatch()

  const handleInput = (e, data) => {
    let value = parseFloat(e.target.value)
    let payload = [data, value]
    if(level === 'prePosProdInputs'){
      dispatch(configProdInputs(payload))
    }
    else if(level === 'prePosProdLabour'){
      dispatch(configProdLabour(payload))
    }
    else if(level === 'prodLabourCosts'){
      dispatch(configLabourCost(payload))
    }
    else if(level === 'prodLabourTime'){
      dispatch(configLabourTime(payload))
    }
  }
  
  return (
    <div id="" className="input-wrapper">
      <input 
        min={0} 
        type={type} 
        className={`${data}Input`} 
        /* onBlur={(e) => handleBlur(e, data)}  */
        onInput={(e) => handleInput(e, data)} 
        placeholder={placeholder} >
      </input>
      <label className='input-label'>{label}</label>
    </div>
  )
};

export default ConfigurableInputs;