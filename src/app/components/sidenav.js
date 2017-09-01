import React from 'react';
import PropTypes from "prop-types";

export class Sidenav extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div>Popular Tags</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span className="badge badge-primary home-badge">C#</span>
                        <span className="badge badge-primary home-badge">ASP.NET</span>
                        <span className="badge badge-primary home-badge">React</span>
                        <span className="badge badge-primary home-badge">Angular</span>
                        <span className="badge badge-primary home-badge">Redux</span>
                    </div>
                </div>
            </div>
        );
    }
}

Sidenav.propTypes = {
};
