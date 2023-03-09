import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TicketHeader from './TicketHeader';
import TicketPartner from './TicketPartner';
import '../assets/styles/components/Ticket.css';

const Ticket = () => {

  let dispatch = useDispatch()

  
  return (
    <section id="Ticket" className="ticket-wrapper">
      <TicketHeader />
      <TicketPartner />
    </section>
  )
};

export default Ticket;