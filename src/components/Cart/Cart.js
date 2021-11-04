import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, ongoing } = props;
    let total = 0;
    const ticketName = [];
    for (const ticket of cart) {
        ticketName.push(ticket.band_name);
        total = total + ticket.ticket;
    }
    console.log(ticketName);

    let vat = total * 0.10;
    let grandTotal = total + vat;
    let allTickets = ticketName.map((ticket) => { return <span className="mx-1 badge bg-danger">{ticket + " "}</span> })
    return (
        <div className="card text-black position-fixed cart-card">
            <div className="card-body">
                <span className="blinking">Ongoing Concert :{ongoing}</span>
                <h3>Total Tickets: {cart.length}</h3>
                <p className="card-text">{allTickets}</p>
                <p className="card-text">Total Cost: &#2547; {total}</p>
                <p className="card-text">Vat: &#2547; {vat}</p>
                <p className="card-text">Grand Total: &#2547; {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;