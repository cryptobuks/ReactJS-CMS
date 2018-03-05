import React from 'react';

class PageEdit extends React.Component {
    render() {
        return (
            <div>
                <div className="display-head">
                    <div className="display-header">Page Content - (Table Name) (table id)</div>
                    <div className="display-description">Manage your table contents</div>
                    <nav className="content-tabs">
                        <ul>
                            <li content="1" className="active">Content Tab #1</li>
                            <li content="2">Content Tab #2</li>
                            <li content="3">Content Tab #3</li>
                        </ul>
                    </nav>
                </div>
                <div className="display-content">
                    <div class="design">
                        <div className="group">
                            <div className="group-title"><input type="text" value="section->name" /></div>
                            <div className="group-fields">
                                <div className="field">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-5">
                                            <input type="text" className="field-input title" placeholder="Label..." value="field->name" />
                                            <input type="text" className="field-input alias" placeholder="Alias..." value="field->alias" />
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
                            </div>
                        </div>
                    </div>
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

export default PageEdit;
