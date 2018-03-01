import React from 'react';

class Section extends React.Component {
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
                                    console.log(this.state.sections)
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
                        { console.log ('test') }
                    </div>
                </div>
            );
        }
    }
}

export default Section;
