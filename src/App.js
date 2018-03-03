import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './css/App.css';
import Sections from "./components/Sections.js";
import Home from './components/Home.js';
import Section from './components/Section.js';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route path="/section/:section/" component={Sections} />
                </div>
            </HashRouter>
        );
    }
}

export default App;