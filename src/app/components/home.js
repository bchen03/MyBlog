import React from "react";
import PropTypes from "prop-types";
import { BlogSnippet } from "./blogsnippet";
import { times, flatten } from 'lodash';

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
            url: "http://localhost:88/api/blogs",
            dataType: "json",
            success: function(resp) {
                console.log("blogs api call:", resp);
                //setTimeout(function() {
                    that.setState({ bodyContent: that.mapBodyContent(resp.Blogs) });
                //}, 2000);
            },
            error: function(req, status, err) {
                console.log("blogs api error:", status, err);
            }
        });

/* For testing or when api is not available
        var tempContent = [
            { 
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
                Title: "RabbitMQ", 
                CreatedOn: "2017-08-29T17:10:57.7634159-04:00",
                Content: "Docker RabbitMQ link: <a href=\"https://hub.docker.com/_/rabbitmq/\">https://hub.docker.com/_/rabbitmq/</a><br/> " +
                "Download: docker pull rabbitmq<br/> " +
                "Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/> " +
                "Show info log: docker logs testrabbit ...<br/>  "
            },
            { 
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
                Title: "RabbitMQ", 
                CreatedOn: "2017-08-29T17:10:57.7634159-04:00",
                Content: "Docker RabbitMQ link: <a href=\"https://hub.docker.com/_/rabbitmq/\">https://hub.docker.com/_/rabbitmq/</a><br/> " +
                "Download: docker pull rabbitmq<br/> " +
                "Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/> " +
                "Show info log: docker logs testrabbit ...<br/>  "
            },
            
        ];

        this.setState({ bodyContent: this.mapBodyContent(tempContent) });
*/        
    }
    
    mapBodyContent(bodyContent) {
        return bodyContent.map((item, index) => {
            return (
                <BlogSnippet title={item.Title} date={item.CreatedOn} key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.Content }} />
                </BlogSnippet>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-10">
                       {
                           this.state.bodyContent ? 
                           this.state.bodyContent : 
                           <em>Loading...</em>
                       } 
                    </div>
                    <div className="col-md-2">
                        {sidenavContent}
                    </div>
                </div>
                <br />
                <br />
            </div>    
        );
    }
}

Home.propTypes = {
    bodyContent: PropTypes.element,
    sidenavContent: PropTypes.element
};

var sidenavContent = (
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



