import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderSummary } from '../actions';
import '../assets/styles/components/Input.css';

const Input = ({type, data, placeholder, label}) => {
  let codeValue = useSelector(state => state.orderSummary[data])
  const dispatch = useDispatch()

  const handleInput = (e, level) => {
    console.log(e)
    console.log(level)
    let value = [level, e.target.value]
    dispatch(changeOrderSummary(value))
  }
  const handleChange = (e, level) => {
    console.log(e)
    console.log(level)
    let value = [level, e.target.value]
    dispatch(changeOrderSummary(value))
  }
  
  return (
    <div id="" className="input-wrapper">
      {type === 'select'
        ? 
        <>
          <select value={codeValue} type={type} className={`${data}Input`} onChange={(e) => handleChange(e, data)} placeholder={placeholder} >
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
          </select>
          <label className='select-label'>{label}</label>
        </>
        : 
        <>
          <input type={type} className={`${data}Input`} onInput={(e) => handleInput(e, data)} placeholder={placeholder} ></input>
          <label className='input-label'>{label}</label>
        </>
      }
    </div>
  )
};


export default Input;
