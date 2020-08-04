import React from 'react';
import UserMenu from './UserMenu';
// import { Context } from './Context';

function Header() {
    return(
        <header className="header">
            <UserMenu/>
        </header>
    );
};

export default Header;