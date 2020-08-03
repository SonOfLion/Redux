import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './ThemeContext';

class App extends Component {
    state ={
        theme: themes.light
    };

    toggleThemes = () => {
        const newTheme = this.state.theme === themes.dark
            ? themes.light
            : themes.dark
        this.setState({
            theme: newTheme
        });
    };

    render() {
        return (
        <div>
            <ThemeContext.Provider value={this.state.theme}>
                <ThemedButton onClick={this.toggleThemes} >
                    Dynamic Theme
                </ThemedButton>
            </ThemeContext.Provider>
            <ThemedButton onClick={this.toggleThemes}>
                Default Theme
            </ThemedButton>
        </div>
    )};
};

export default App;