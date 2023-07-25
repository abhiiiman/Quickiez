import React from 'react';
import Banner from './Banner';
import Menu from '../../Components/Common/Menu';
import Footer from '../../Components/Common/Footer';
import CartCountButton from '../../Components/Common/CartCountButton';
import { menuItemsData } from '../../Components/Common/Menu/Data';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* Menu */}
            <Menu list = {menuItemsData}/>
            {/* Footer */}
            <Footer />
            {/* Cart */}
            <CartCountButton />
        </div>
    )
}

export default Home