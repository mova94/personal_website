import React, {useState} from 'react';

import Navbar from './Navbar';

import '../css/header.css';

function Header() {
    
    return(
        <div className="Header">
            <h2>Hello From Header</h2>
            <Navbar/>
        </div>
    );
};

export default Header;