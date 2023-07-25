import React from 'react';
import "./style.css";
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';

const MenuItem = ({ item }) => {
    const {name, info, price, img } = item;
    return (
        <div className='item'>
            <img src={img} alt="item" />
            <div className="item-head-desc">
                <p className='head-desc-name'>{name}</p>
                <p className='head-desc-info'><small>{info}</small></p>
            </div>
            <div className="item-foot-desc">
                <span className='foot-desc-price'>${price}</span>
                <ButtonAddRemoveItem quantity={20}/>
            </div>
        </div>
    )
}

export default MenuItem;