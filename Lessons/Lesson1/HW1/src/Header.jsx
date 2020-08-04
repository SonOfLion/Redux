import React, { Component } from 'react';
import UserMenu from './UserMenu';
// import { Context } from './Context';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <UserMenu/>
            </header>
        );
    };
};

export default Header;