import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTicketState } from '../actions';
import '../assets/styles/components/Ticket.css';

const TicketHeader = () => {

  let dispatch = useDispatch()

  let ticketType = useSelector(state => state.ticket)

  const handleClick = (e) => {
    console.log(e)
    let id = e.target.id
    if(id === 'ticket-partner'){
      dispatch(changeTicketState('partner'))
    }else if(id === 'ticket-outer'){
      dispatch(changeTicketState('outer'))
    }else if(id === 'ticket-compare'){
      dispatch(changeTicketState('algarin'))
    }
  }

  return (
    <div className="ticket-header__wrapper">
      {ticketType === 'partner' &&
      <>
        <button 
          id='ticket-partner' 
          className={`ticket-button ticket-partner ticket-active`} 
          onClick={(e) => handleClick(e)}
          >Socio</button>
        <button 
          id='ticket-outer' 
          className={`ticket-button ticket-outer`} 
          onClick={(e) => handleClick(e)}
          style={{borderRadius: '0 0 0 5px'}} >Externo</button>
        <button 
          id='ticket-compare' 
          className={`ticket-button ticket-compare`} 
          onClick={(e) => handleClick(e)}
          >Algarín</button>
      </>
      }
      {ticketType === 'outer' &&
      <>
        <button 
          id='ticket-partner' 
          className={`ticket-button ticket-partner`} 
          onClick={(e) => handleClick(e)}
          style={{borderRadius: '0 0 5px 0'}}>Socio</button>
        <button 
          id='ticket-outer' 
          className={`ticket-button ticket-outer ticket-active`} 
          onClick={(e) => handleClick(e)}
          >Externo</button>
        <button 
          id='ticket-compare' 
          className={`ticket-button ticket-compare`} 
          onClick={(e) => handleClick(e)}
          style={{borderRadius: '0 0 0 5px'}}>Algarín</button>
      </>
      }
      {ticketType === 'algarin' &&
      <>
        <button 
          id='ticket-partner' 
          className={`ticket-button ticket-partner`} 
          onClick={(e) => handleClick(e)}
          >Socio</button>
        <button 
          id='ticket-outer' 
          className={`ticket-button ticket-outer`} 
          onClick={(e) => handleClick(e)}
          style={{borderRadius: '0 0 5px 0'}}>Externo</button>
        <button 
          id='ticket-compare' 
          className={`ticket-button ticket-compare ticket-active`} 
          onClick={(e) => handleClick(e)}
          >Algarín</button>
      </>
      }
    </div>
  )
};

export default TicketHeader;