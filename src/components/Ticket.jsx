import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TicketHeader from './TicketHeader';
import TicketPartner from './TicketPartner';
import TicketClient from './TicketClient';
import '../assets/styles/components/Ticket.css';

const Ticket = () => {

  let dispatch = useDispatch()

  let ticketType = useSelector(state => state.ticket)
  
  return (
    <section id="Ticket" className="ticket-wrapper">
      <h3 className='ticket-title'>Ticket</h3>
      <TicketHeader />
      {ticketType === 'partner' &&
        <TicketPartner />
      }
      {ticketType === 'outer' &&
        <TicketClient />
      }
      {ticketType === 'algarin' &&
        <TicketPartner />
      }
    </section>
  )
};

export default Ticket;