import React, { useRef } from 'react';
import Banner from './Banner';
import Menu from '../../Components/Common/Menu';
import Footer from '../../Components/Common/Footer';
import CartCountButton from '../../Components/Common/CartCountButton';
import { menuItemsData } from '../../Components/Common/Menu/Data';

const Home = () => {
    const menuRef = useRef();

    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            {/* Banner */}
            <Banner handleScrollMenu={handleScrollMenu} />
            {/* Menu */}
            <Menu list={menuItemsData} ref={menuRef} />
            {/* Footer */}
            <Footer />
            {/* Cart */}
            <CartCountButton />
        </div>
    )
}

export default Home