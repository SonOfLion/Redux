import React from 'react';

function UserMenu () {
    return(
        <div className="menu">
            <span className="menu__greeting">Hello, Nikola Tesla</span>
            <img alt="User Avatar" src="https://avatars3.githubusercontent.com/u10001" className="menu__avatar"></img>
        </div>
    );
};

export default UserMenu;