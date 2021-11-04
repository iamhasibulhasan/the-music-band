import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Tickets from '../Tickets/Tickets';
import './Shop.css'

const Shop = () => {
    const [concerts, setConcerts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./band.json')
            .then(res => res.json())
            .then(data => setConcerts(data));
    }, []);

    // Add to cart
    const handleAddToCart = (concerts) => {
        // console.log(concerts);
        const newCart = [...cart, concerts];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="concert">
                {
                    concerts.map(concert => <Tickets
                        key={concert.key}
                        concert={concert}
                        handleAddToCart={handleAddToCart}
                    ></Tickets>)
                }

            </div>
            <div>
                {
                    <Cart
                        ongoing={concerts.length}
                        cart={cart}
                    ></Cart>
                }
            </div>
        </div >
    );
};

export default Shop;