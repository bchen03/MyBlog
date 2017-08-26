import React from "react";

export class About extends React.Component
{
    constructor(props) {
        super(props);
    }

    showMatch() {
        let matches = this.props.match;
        return Object.keys(matches).map(function(key) {
            return <div key={key}>{key} - {matches[key].toString()}</div>;
        });
    }

    render() {
        return (
            <div>
                {this.showMatch()}
            </div>
        );
    }
}

