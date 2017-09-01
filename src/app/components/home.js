import React from "react";
import PropTypes from "prop-types";
import { times, flatten } from 'lodash';
import { Route, NavLink, Switch } from "react-router-dom";
import { BlogSnippet } from "./blogsnippet";
import { Sidenav } from './sidenav';

export class Home extends React.Component {

    constructor(props) {
        console.log("Home entered ctr: ");

        super(props);
        
        this.state = {
            bodyContent: null,
            sidenavContent: null
        }
        
        this.mapBodyContent = this.mapBodyContent.bind(this);
        
        console.log("Home exiting ctr: ", this.state);
    }

    componentWillMount() {
        console.log('Home Component WILL MOUNT!')
        
        // This works from here, no need to call setState()
        //this.state.bodyContent = [];
    }

    componentDidMount() {
        console.log('Home Component DID MOUNT!')
        var that = this;

        // Using jQuery.ajax to call api
        $.ajax({
            url: "http://localhost:88/api/blogs?filter=condensed",
            dataType: "json",
            success: function(resp) {
                console.log("blogs?filter=condensed api call:", resp);
                //setTimeout(function() {
                    that.setState({ bodyContent: that.mapBodyContent(resp.Blogs) });
                //}, 2000);
            },
            error: function(req, status, err) {
                console.log("blogs?filter=condensed api error:", status, err);
            }
        });

    }

    testContent() {
        // For testing or when api is not available
        var content = [
            { 
                Id: 1,
                Title: "Redux", 
                CreatedOn: "2017-08-29T17:10:57.7634159-04:00",
                Content: "An implementation of Flux where data store listens for actions, " +
                "and uses a function called a reducer to return a new app state " +
                "for each action. Key point is app state is immutable, reducers " +
                "take inputs and return outputs with no side-effects (updates to " +
                "global state, calling setters on existing objects, etc).<br/> " +
                "Facebook Flux diagram: <a href=\"http://redux.js.org/\">http://redux.js.org/ ...</a> "
            },
            { 
                Id: 2,
                Title: "RabbitMQ", 
                CreatedOn: "2017-08-29T17:10:57.7634159-04:00",
                Content: "Docker RabbitMQ link: <a href=\"https://hub.docker.com/_/rabbitmq/\">https://hub.docker.com/_/rabbitmq/</a><br/> " +
                "Download: docker pull rabbitmq<br/> " +
                "Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/> " +
                "Show info log: docker logs testrabbit ...<br/>  "
            },
            { 
                Id: 3,
                Title: "Redux", 
                CreatedOn: "2017-08-29T17:10:57.7634159-04:00",
                Content: "An implementation of Flux where data store listens for actions, " +
                "and uses a function called a reducer to return a new app state " +
                "for each action. Key point is app state is immutable, reducers " +
                "take inputs and return outputs with no side-effects (updates to " +
                "global state, calling setters on existing objects, etc).<br/> " +
                "Facebook Flux diagram: <a href=\"http://redux.js.org/\">http://redux.js.org/ ...</a> "
            },
            { 
                Id: 4,
                Title: "RabbitMQ", 
                CreatedOn: "2017-08-29T17:10:57.7634159-04:00",
                Content: "Docker RabbitMQ link: <a href=\"https://hub.docker.com/_/rabbitmq/\">https://hub.docker.com/_/rabbitmq/</a><br/> " +
                "Download: docker pull rabbitmq<br/> " +
                "Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/> " +
                "Show info log: docker logs testrabbit ...<br/>  "
            },
            
        ];

        this.setState({ bodyContent: this.mapBodyContent(content) });
    }

    mapBodyContent(bodyContent) {
        // You can also pass the content as an attribute and
        // put the <div> below in BlogSnippet, but this shows how
        // to use this.props.children
        return bodyContent.map((item, index) => {
            return (
                <BlogSnippet 
                    title={item.Title} 
                    history={this.props.history} 
                    blogid={item.Id} 
                    date={item.CreatedOn} 
                    key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.Content }} />
                </BlogSnippet>
            );
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        {
                            this.state.bodyContent ? 
                            this.state.bodyContent : 
                            <em>Loading...</em>      
                        } 
                    </div>
                    <div className="col-md-2">
                        <Sidenav />
                    </div>
                </div>
            </div>    
        );
    }
}

Home.propTypes = {
    bodyContent: PropTypes.element
};

