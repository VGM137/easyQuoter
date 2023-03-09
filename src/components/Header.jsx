import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showConfigurations } from '../actions';
import '../assets/styles/components/Header.css';

const Header = () => {

  const showConfigurationsState = useSelector(state => state.showConfigurations)
  
  const dispatch = useDispatch()

  const handleClick = (e) => {
    let payload
    showConfigurationsState === true ? payload = false : payload = true
    dispatch(showConfigurations(payload))
  }
  
  return (
    <div className='header-wrapper'>
       <button className='config-button' onClick={(e) => handleClick(e)}>{showConfigurationsState ? 'Cotizador' : 'Configuraciones'}</button>
    </div>
  )
};

export default Header;