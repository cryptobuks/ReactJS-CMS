import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home.js';
import Section from './Section.js';
import ContentEdit from './ContentEdit.js';

class Sections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: 'http://backoffice.bruindev.com/ang',
            sections: [],
            sectionsLoaded: false,
            activeTab: ""
        };

        // HANDLE SUBMIT
        this.changeTab = this.changeTab.bind(this);

        // FETCH SECTIONS
        fetch(this.state.apiurl + "/api/loadSections.php")
            .then((resp) => resp.json())
            .then(data => {
                this.setState({
                    sections: data,
                    sectionsLoaded: true,
                    activeTab: data[0]['slug']
                });
            }
        )
        console.log(props)
    }

    changeTab = tab => {
        this.setState({ activeTab: tab });
    }

    render() {
        return (
            <div>
                <div className="section menu">
                    <div className="head">
                        <img src="/images/profile.jpg" alt=""/>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                {
                                    this.state.sections.map(function(section, index) {
                                        return <a href={"#/section/" + section.slug + "/"} key={index}  onClick={e => this.changeTab(section.slug)} className={this.props.match.params.section === section.slug ? "active" : null}><i className={section.icon}></i>{section.name}</a>
                                    }, this)
                                }
                            </li>
                        </ul>
                    </nav>
                </div>

                <div id="sectionsContent" className="section editor">
                    <div className="editor-tree">
                        <div className="search hide">
                            <input type="text" name="search" placeholder="Search.." />
                        </div>
                        <div className="tabs">
                            <Route path="/section/:section/" component={Section} />
                        </div>
                    </div>
                </div>

                <div className="body">
                    <div className="section display">
                        <Route exact path="/section/content/page/:id/" component={ContentEdit} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Sections;
