import React, { Component } from 'react';
import './css/App.css';
import Section from "./components/Sections.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Section />
            </div>
        );
    }
}

export default App;