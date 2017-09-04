import React from "react";
import PropTypes from "prop-types";

export class BlogSnippet extends React.Component {

    constructor(props) {
        super(props);

    }

    getHref() {
        return "/detail/" + this.props.blogid;
    }

    // Method to use router history to load specific detail component
    loadBlogDetail() {
        this.props.history.push("/detail/" + this.props.blogid);
    }

    render() {
        // Using onClick={() => {loadBlogDetail()}} is much faster loading the detail page
        // (because href will call the server) but href={this.getHref()} will show the URL 
        // in the status bar
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4 className="col-md-6">
                        <a className="blog-title-link" onClick={() => {this.loadBlogDetail()}}>{this.props.title}</a>
                    </h4>
                    <div className="col-md-6 text-right text-muted small">{this.props.date}</div>
                </div>
                <div>
                    {this.props.children}
                    <br/>
                    <br/>
                </div>
            </div>            
        )
    }

}

BlogSnippet.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    date: PropTypes.string
};

