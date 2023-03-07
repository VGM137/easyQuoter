import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/components/Ticket.css';

const TicketHeader = () => {

  let dispatch = useDispatch()

  let ticketType = useSelector(state => state.ticket)

  
  return (
    <div className="ticket-header__wrapper">
      <button className={`ticket-button ticket-partner  ${ticketType === 'partner' ? 'ticket-active' : ''}`}>Socio</button>
      <button className={`ticket-button ticket-outer ${ticketType === 'outer' ? 'ticket-active' : ''}`}>Externo</button>
      <button className={`ticket-button ticket-compare ${ticketType === 'algarin' ? 'ticket-active' : ''}`}>Algarín</button>
    </div>
  )
};

export default TicketHeader;