import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-lg pt-5 flex  justify-center gap-3'>
            <Link to='/'>Home</Link>
            <Link to='/order-review'>Order</Link>
            <Link to='/About'>About</Link>
        </div>
    );
};

export default Header;