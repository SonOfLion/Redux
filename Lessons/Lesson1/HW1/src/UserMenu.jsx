import React, { Component } from 'react';
import { Context } from './Context';

class UserMenu extends Component {
    render() {
        return(
            <div className="menu">
                <span className="menu__greeting">
                    Hello, {this.context.name}
                </span>
                <img alt="User Avatar"
                    src={this.context.avatar_url}
                    className="menu__avatar">
                </img>
            </div>
        );
    };
};

UserMenu.contextType = Context;

export default UserMenu;