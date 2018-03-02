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
                    <div id="sections">
                        <Sections />
                    </div>

                    <div id="sectionsContent" className="section editor">
                        <Route exact path="/section/:section/" component={Section}/>
                    </div>

                    <div className="body">
                        <div className="section display">
                            <Route exact path="/" component={Home}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;