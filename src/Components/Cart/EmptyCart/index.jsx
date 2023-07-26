import React from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import EmptyCartImg from "./emptycart.png";

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className='emptyCart'>
            <img src={EmptyCartImg} alt="empty" />
            <button onClick={() => navigate('/')}><i className="fas fa-long-arrow-alt-left"></i>Shop Now</button>
        </div>
    )
}

export default EmptyCart;