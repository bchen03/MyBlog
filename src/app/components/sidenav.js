import React from 'react';
import PropTypes from "prop-types";
import { forOwn } from 'lodash';


export class Sidenav extends React.Component {

    constructor(props) {
        console.log("Sidenav entered ctr: ");

        super(props);
        
        this.state = {
            sidenavContent: null
        }
        
        this.mapContent = this.mapContent.bind(this);
        
        console.log("Sidenav exiting ctr: ", this.state);
    }

    componentDidMount() {
        console.log('Sidenav Component DID MOUNT!')
        var that = this;

        // Using jQuery.ajax to call api
        $.ajax({
            url: "http://localhost:88/api/blogs?filter=wordcloud",
            dataType: "json",
            success: function(resp) {
                console.log("blogs?filter=wordcloud api call:", resp);
                //setTimeout(function() {
                    that.setState({ sidenavContent: resp });
                    console.log("sidenav mapContent():", resp);
                //}, 2000);

            },
            error: function(req, status, err) {
                console.log("blogs?filter=wordcloud api error:", status, err);
            }
        });
    }

    mapContent(content) {
        let arr = [];
        forOwn(content, (value, key) => {
            arr.push(
                <span key={key} 
                    className="badge badge-primary home-badge"
                    onClick={() => { this.props.tagAction(key) }}>{key}</span>
            );
        });
        return arr;
    }
       
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
                        {
                            this.state.sidenavContent ?
                            this.mapContent(this.state.sidenavContent) :
                            <em>Loading...</em>      
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Sidenav.propTypes = {
    sidenavContent: PropTypes.object
};
