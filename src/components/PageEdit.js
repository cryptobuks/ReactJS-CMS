import React from 'react';
import { } from 'react-router-dom';

class PageEdit extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            apiurl: 'http://backoffice.bruindev.com/ang',
            pagetype: [],
            pagetabs: [],
            pageLoaded: false
        };
        
        // FETCH PAGE TYPE
        fetch(this.state.apiurl + "/api/loadPageType.php?id=" + props.match.params.id)
            .then((resp) => resp.json())
            .then(data => {
                this.setState({
                    pagetype: data['pagetype'],
                    pagetabs: data['pagetabs'],
                    pageLoaded: true
                });
            }
        )
    }

    render() {
        if(this.state.pageLoaded === false) { return null; }
        else {
            return (
                <div>
                    <div className="display-head">
                        <div className="display-header">Page Content - {this.state.pagetype.name}</div>
                        <div className="display-description">Manage your table contents</div>
                        <nav className="content-tabs">
                            <ul>
                                {
                                    this.state.pagetabs.map(function(tab, index) {
                                        return <li className={index === 0 ? "active" : null} key={index}>{tab.name}</li>
                                    }, this)
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="display-content">
                        {
                            this.state.pagetabs.map(function(tab, index) {
                                if(tab.fields)
                                {
                                    return (
                                        <div className="design" key={index}>
                                            <div className="group">
                                                <div className="group-title"><input type="text" defaultValue={tab.name} /></div>
                                                <div className="group-fields">
                                                    {
                                                        tab.fields.map(function(field, index) {
                                                            return (
                                                                <div className="field" key={index}>
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-5">
                                                                            <input type="text" className="field-input title" placeholder="Label..." defaultValue={field.name} />
                                                                            <input type="text" className="field-input alias" placeholder="Alias..." defaultValue={field.alias} />
                                                                            <textarea className="field-input description" placeholder="Enter a description..."></textarea>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-6">
                                                                            <div className="transparent"></div>
                                                                        </div>
                                                                        <div className="col-md-1 col-sm-1">
                                                                            <div className="options">
                                                                                <a><i className="fa fa-cog"></i></a>
                                                                                <a><i className="fa fa-trash"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                else
                                {
                                    return null;
                                }
                            }, this)
                        }
                    </div>
                    <div className="display-footer">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-6">
                                <a className="button">Save & Publish</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default PageEdit;
