import React from 'react';

class Sections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiurl: 'http://backoffice.bruindev.com/ang',
            sections: [],
            sectionsLoaded: false
        };

        fetch(this.state.apiurl + "/api/loadSections.php")
            .then((resp) => resp.json())
            .then(data => {
                this.setState({ sections: data, sectionsLoaded: true });
            }
        )
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
                                        return <a href={"#/section/" + section.slug} key={index}><i className={section.icon}></i>{section.name}</a>
                                    })
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
