import React from 'react';
import "./style.css";
import Logo from '../../Components/Common/Logo';
import Menu from '../../Components/Common/Menu';
import Footer from '../../Components/Common/Footer';
import EmptyCart from '../../Components/Cart/EmptyCart';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../redux/cart/cart.selector';

const Cart = ({ cartCount, cartList, cartTotal }) => {
    return (
        <>
            <div className='cart-header'>
                <Logo />
            </div>

            {cartCount === 0 ? (
                <EmptyCart />
            ) : (
                <div className='orders'>
                    <h1 className='orders-heading'>Your Orders</h1>
                    <div className='orders-menu'>
                        <Menu list={cartList} />
                    </div>
                    <h3 className='orders-total'>Your Total ₹{cartTotal}</h3>
                </div>
            )}

            <Footer />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);