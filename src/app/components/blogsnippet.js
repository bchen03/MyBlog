import React from "react";
import PropTypes from "prop-types";

export class BlogSnippet extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="col-md-6">{this.props.title}</h4>
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
