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
                    <div className="content content-1">
                        <div className="row field">
                            <div className="col-md-3 col-sm-4">
                                <label className="title">Page Title</label>
                                <p>Set a page tite for your page</p>
                            </div>
                            <div className="col-md-7 col-sm-8">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row field">
                            <div className="col-md-3 col-sm-4">
                                <label className="title">Page Description</label>
                            </div>
                            <div className="col-md-7 col-sm-8">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row field">
                            <div className="col-md-3 col-sm-4">
                                <label className="title">Page Content</label>
                            </div>
                            <div className="col-md-7 col-sm-8">
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="content content-2 hide">
                        <div className="row field">
                            <div className="col-md-3 col-sm-4">
                                <label className="title">Category</label>
                            </div>
                            <div className="col-md-7 col-sm-8">
                                <select>
                                    <option>Lorem Ipsum Dolar</option>
                                    <option>Lorem Ipsum Dolar</option>
                                    <option>Lorem Ipsum Dolar</option>
                                    <option>Lorem Ipsum Dolar</option>
                                    <option>Lorem Ipsum Dolar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="content content-3 hide">
                        <p>More fields here...</p>
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
