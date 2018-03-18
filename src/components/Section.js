import React from 'react';

class Section extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            apiurl: 'http://backoffice.bruindev.com/ang',
            pages: [],
            pagesLoaded: false
        }

        // FETCH PAGES
        fetch(this.state.apiurl + "/api/loadPages.php")
            .then((resp) => resp.json())
            .then(data => {
                this.setState({
                    pages: data,
                    pagesLoaded: true
                });
            }
        )

    }
    render() {
        return (
            <div>
                <div className="editor-tree">
                    <div className="search">
                        <input type="text" name="search" placeholder="Search.." />
                    </div>
                    <div className="tabs">
                        <div className={this.props.match.params.section === "content" ? "tab active" : "tab"}>
                            <div className="root">Content</div>
                            <ul className="file-tree">
                                <li><a href="#section/content/page/7/"><i className="fa fa-folder"></i>haydenbruin.com</a>
                                    <ul>
                                        <li><a href="#section/content/page/1/"><i className="fa fa-home"></i>Home</a></li>
                                        <li><a href="#section/content/page/2/"><i className="fa fa-book"></i>About Us</a>
                                            <ul>
                                                <li><a href="#section/content/page/3/"><i className="fa fa-book"></i>Who are are?</a></li>
                                                <li><a href="#section/content/page/4/"><i className="fa fa-book"></i>Our Story?</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#section/content/page/5/"><i className="fa fa-book"></i>Our History</a></li>
                                        <li><a href="#section/content/page/6/"><i className="fa fa-phone"></i>Contact Us</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={this.props.match.params.section === "media" ? "tab active" : "tab"}>
                            <div className="root">Content</div>
                            <ul className="file-tree">
                                <li><a href="#section/media/page/7/"><i className="fa fa-folder"></i>mediafile.jpg</a></li>
                                <li><a href="#section/media/page/7/"><i className="fa fa-folder"></i>catpic.png</a></li>
                            </ul>
                        </div>
                        <div className={this.props.match.params.section === "settings" ? "tab active" : "tab"}>
                            <div className="root">Settings</div>
                            <ul className="file-tree">
                                <li><a><i className="fa fa-folder"></i>Page Types</a>
                                    <ul>
                                        {
                                            this.state.pages.map(function(page, index) {
                                                return <li key={index}><a href={"#/section/settings/page/" + page.id + "/"}><i className={"fa " + page.icon}></i>{page.name}</a></li>
                                            }, this)
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={this.props.match.params.section === "users" ? "tab active" : "tab"}>
                            <div className="root">Users</div>
                            <ul className="file-tree">
                                <li><a href="#section/email/page/1/"><i className="fa fa-folder"></i>Email Settings</a></li>
                                <li><a href="#section/email/page/2/"><i className="fa fa-folder"></i>Email Templates</a></li>
                                <li><a href="#section/email/page/3/"><i className="fa fa-folder"></i>Mail Log</a></li>
                            </ul>
                        </div>
                        <div className={this.props.match.params.section === "email" ? "tab active" : "tab"}>
                            <div className="root">Emails</div>
                            <ul className="file-tree">
                                <li><a href="#section/email/page/1/"><i className="fa fa-folder"></i>Email Settings</a></li>
                                <li><a href="#section/email/page/2/"><i className="fa fa-folder"></i>Email Templates</a></li>
                                <li><a href="#section/email/page/3/"><i className="fa fa-folder"></i>Mail Log</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
