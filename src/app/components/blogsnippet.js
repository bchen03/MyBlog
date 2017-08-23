import React from "react";
import  PropTypes from "prop-types";

export class BlogSnippet extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
                <br/>
                <br/>
            </div>
        )
    }
}

BlogSnippet.propTypes = {
    children: PropTypes.element
};
