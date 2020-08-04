import React, { Component } from 'react';
import Header from './Header';
import { Context } from './Context';

class App extends Component  {
    state = {
        userData: {
            name: 'Nikola Tesla',
            avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
        },
    };

    render () {
        return(
            <Context.Provider value={this.state.userData}>
                <Header/>
            </Context.Provider>
        );
    }
};

export default App;