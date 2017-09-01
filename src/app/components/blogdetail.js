import React from 'react';
import PropTypes from "prop-types";
import { Sidenav } from './sidenav'

export class BlogDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            blogDetailContents: null
        }
    }

    componentDidMount() {
        console.log('BlogDetail Component DID MOUNT!')
        var that = this;

        // Using jQuery.ajax to call api
        $.ajax({
            url: "http://localhost:88/api/blogs/" + this.props.match.params.id,
            dataType: "json",
            success: function(resp) {
                console.log("blogs detail api call:", resp);
                //setTimeout(function() {
                    that.setState({ blogDetailContents: resp.Content });
                //}, 2000);
            },
            error: function(req, status, err) {
                console.log("blogs detail api error:", status, err);
            }
        });

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        {
                            this.state.blogDetailContents ?
                            <div dangerouslySetInnerHTML={{ __html: this.state.blogDetailContents }} /> : 
                            <em>Loading...</em>      
                        }
                    </div>
                    <div className="col-md-2">
                        <Sidenav />
                    </div>
                </div>
            </div>            
        )
    }

}

BlogDetail.propTypes = {
    blogDetailContents: PropTypes.element
};

