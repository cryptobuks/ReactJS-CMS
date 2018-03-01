import React from 'react';

class Section extends React.Component {

    render() {
        return (
            <div>
                <div class="root">Content</div>

                <ul class="file-tree">
                    <li><a href="#section/content/page/7/"><i class="fa fa-folder"></i>haydenbruin.com</a>
                        <ul>
                            <li><a href="#section/content/page/1/"><i class="fa fa-home"></i>Home</a></li>
                            <li><a href="#section/content/page/2/"><i class="fa fa-book"></i>About Us</a>
                                <ul>
                                    <li><a href="#section/content/page/3/"><i class="fa fa-book"></i>Who are are?</a></li>
                                    <li><a href="#section/content/page/4/"><i class="fa fa-book"></i>Our Story?</a></li>
                                </ul>
                            </li>
                            <li><a href="#section/content/page/5/"><i class="fa fa-book"></i>Our History</a></li>
                            <li><a href="#section/content/page/6/"><i class="fa fa-phone"></i>Contact Us</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Section;
