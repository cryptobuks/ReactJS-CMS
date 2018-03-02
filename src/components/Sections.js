import React from 'react';

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
                    sectionsLoaded: true
                });
            }
        )

    }

    changeTab = tab => {
        this.setState({ activeTab: tab });
    }

    render() {
        if(this.state.sectionsLoaded === true)
        {
            return (
                <div className="section menu">
                    <div className="head">
                        <img src="/images/profile.jpg" alt=""/>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                {
                                    this.state.sections.map(function(section, index) {
                                        return <a href={"#/section/" + section.slug} key={index}  onClick={e => this.changeTab(section.slug)} className={this.state.activeTab === section.slug ? "active" : null}><i className={section.icon}></i>{section.name}</a>
                                    }, this)
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        }
        else
        {
            return (
                <div className="section menu">
                    <div className="head">
                        <img src="/images/profile.jpg" alt=""/>
                    </div>
                </div>
            );
        }
    }
}

export default Sections;
