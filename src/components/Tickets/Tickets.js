import React from 'react';
import './Tickets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLocationArrow, faLanguage, faClock, faCalendar, faMusic } from '@fortawesome/free-solid-svg-icons';

const Tickets = (props) => {
    const { band_name, city_of_origin, genre, info, ticket, concert_time, formed, language, date, img } = props.concert;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />
    // console.log(props.concert);
    return (
        <div className="tickets-container">
            <div className="m-2">
                <div className="card ticket-card">
                    <span className="text-center mt-3">
                        <img src={img} className="card-img-top" alt="..." />
                    </span>
                    <div className="card-body">
                        <span className="text-center">
                            <h5 className="card-title">{band_name.toUpperCase()}</h5>
                        </span>
                        <p className="card-text text-center">{info}</p>
                        <div className="concert-info">
                            <div>
                                <p className="card-text"><FontAwesomeIcon icon={faMusic} /> {genre}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faCalendar} /> {date.toUpperCase()}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faClock} />{concert_time.toUpperCase()}</p>
                            </div>
                            <div>
                                <p className="card-text">&#2547; {ticket} BDT</p>
                                <p className="card-text"><FontAwesomeIcon icon={faLanguage} /> {language}</p>
                                <p className="card-text">{locationIcon} {city_of_origin}</p>
                            </div>
                        </div>
                        <div className="d-grid col-12 mx-auto mt-3">
                            <button
                                onClick={() => props.handleAddToCart(props.concert)}
                                className="btn btn-primary btn-block btn-grad buy-ticket"
                            >{cartIcon} Buy Ticket</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;