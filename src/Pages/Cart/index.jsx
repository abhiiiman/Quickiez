import React from 'react';
import "./style.css";
import Logo from '../../Components/Common/Logo';
import Menu from '../../Components/Common/Menu';
import { menuItemsData } from '../../Components/Common/Menu/Data';
import Footer from '../../Components/Common/Footer';
import EmptyCart from '../../Components/Cart/EmptyCart';

const Cart = () => {
    return (
        <>
            <div>
                <div className='cart-header'>
                    <Logo />
                </div>
                <EmptyCart />
                <div className='orders'>
                    <h1 className='orders-heading'>Your Orders</h1>
                    <div className='orders-menu'>
                        <Menu list={menuItemsData} />
                    </div>
                    <h3 className='orders-total'>Your Total ${ }</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart;