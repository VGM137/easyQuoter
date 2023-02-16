import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderSummary, updateInks } from '../actions';
import '../assets/styles/components/Input.css';

const Input = ({type, data, placeholder, label}) => {
  let codeValue = useSelector(state => state.orderSummary[data])
  let productionInputs = useSelector(state => state.serigraphyOrder.productionInputs)
  const dispatch = useDispatch()
  let mutableInputs = productionInputs
  console.log(mutableInputs)
  
  const handleInput = async (e, level) => {
    console.log(e)
    console.log(level)
    let value = [level, e.target.value]
    if(level !== 'totalColors'){
      dispatch(changeOrderSummary(value))
    }
  }
  const handleChange = (e, level) => {
    console.log(e)
    console.log(level)
    let value = [level, e.target.value]
    dispatch(changeOrderSummary(value))
  }

  const handleBlur = (e, level) => {
    let value = [level, e.target.value]
    dispatch(changeOrderSummary(value))
    
    let inputsLength = productionInputs.length
    let newField = {ink: '',quarterKgPrice: '',oneKgPrice: '',input: '',quantityToBuy: '',totalPrice: ''}
  
    if(inputsLength > e.target.value){
      let difference = inputsLength - e.target.value
      let pos1 = inputsLength-difference
      mutableInputs.splice(pos1, difference)
      console.log(mutableInputs)
      dispatch(updateInks(mutableInputs))
    }else{
      let difference = e.target.value - inputsLength
      for(let i = 0; i < difference; i++){
        mutableInputs.push(newField)
      }
      console.log(mutableInputs)
      dispatch(updateInks(mutableInputs))
    }  
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
          <input type={type} className={`${data}Input`} onBlur={(e) => handleBlur(e, data)} onInput={(e) => handleInput(e, data)} placeholder={placeholder} ></input>
          <label className='input-label'>{label}</label>
        </>
      }
    </div>
  )
};


export default Input;
