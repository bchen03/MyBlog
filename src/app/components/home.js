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
        
        console.log("Home entered props: ", this.props);

        this.state = {
            blogContent: null,
            search: this.props.search || ""
        }
        
        this.matchUrl = this.props.match.url;


        this.getBlogs = this.getBlogs.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.mapBlogContent = this.mapBlogContent.bind(this);
        
        console.log("Home exiting ctr: ", this.state);
    }

    componentWillMount() {
        console.log('Home Component WILL MOUNT!')
        // This works from here, no need to call setState()
        //this.state.blogContent = [];
    }

    componentDidMount() {
        console.log('Home Component DID MOUNT!')
        this.getBlogs();
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('Home Component DID UPDATE!', nextProps, nextState);
        if (this.state.search !== nextState.search) {
            console.log("Home Component search != nextSearch");
            this.getBlogs();
        }
    }

    getBlogs() {
        var that = this;
        
        var homeUrl = "http://localhost:88/api/blogs?filter=snippet&search=" + this.state.search;
        console.log("Home.getBlogs url:", homeUrl);

        // Using jQuery.ajax to call api
        $.ajax({
            url: homeUrl,
            dataType: "json",
            success: function(resp) {
                console.log("blogs?filter=snippet api call:", resp);
                //setTimeout(function() {
                    that.setState({ blogContent: resp.Blogs });
                //}, 2000);
            },
            error: function(req, status, err) {
                console.log("blogs?filter=snippet api error:", status, err);
            }
        });
       
    }

    setSearch(s) {
        console.log("Home.setSearch() called:", s);
        this.setState({ search: s })
    }

    mapBlogContent(content) {
        // You can also pass the content as an attribute and
        // put the <div> below in BlogSnippet, but this shows how
        // to use this.props.children
        return content.map((item, index) => {
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
                            this.state.blogContent ? 
                            this.mapBlogContent(this.state.blogContent) : 
                            <em>Loading...</em>      
                        } 
                    </div>
                    <div className="col-md-2">
                        <Sidenav history={this.props.history} tagAction={this.setSearch} />
                    </div>
                </div>
            </div>    
        );
    }
}

Home.propTypes = {
    blogContent: PropTypes.array,
    search: PropTypes.string
};

var testContent = function() {
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
    return content;
}

