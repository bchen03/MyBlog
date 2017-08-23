import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import  PropTypes from "prop-types";
import { BlogSnippet } from "./components/blogsnippet";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

const snippet1 = <div>
        <h4>Redux</h4>
        <div>
            An implementation of Flux where data store listens for actions, 
            and uses a function called a reducer to return a new app state 
            for each action. Key point is app state is immutable, reducers 
            take inputs and return outputs with no side-effects (updates to
                global state, calling setters on existing objects, etc).<br/>

            Facebook Flux diagram: <a href="http://redux.js.org/">http://redux.js.org/</a>...
        </div>
    </div>;

const snippet2 = <div>
        <h4>RabbitMQ</h4>
        <div>
            Docker RabbitMQ link: <a href="https://hub.docker.com/_/rabbitmq/">https://hub.docker.com/_/rabbitmq/</a><br/>
            Download: docker pull rabbitmq<br/>
            Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/>
            Show info log: docker logs testrabbit...<br/>
        </div>
    </div>;

const snippet3 = <div>
        <h4>RabbitMQ</h4>
        <div>
            Docker RabbitMQ link: <a href="https://hub.docker.com/_/rabbitmq/">https://hub.docker.com/_/rabbitmq/</a><br/>
            Download: docker pull rabbitmq<br/>
            Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/>
            Show info log: docker logs testrabbit<br/>
            User: guest<br/>
            Pwd: guest<br/>

            C# Project: C:\dev\RabbitMQ<br/><br/>

            To call RabbitMQ from a client app, when running the container I had to expose port 5672:<br/><br/>

            docker run -d --hostname benny --name testrabbit -p 8088:15672 –p 5672:5672  rabbitmq:3-management<br/>

            -d = run in background<br/>
            --name = name of container<br/>
            -p =externally  exposed por t (8088 management console; 5672 client API) <br/>
            -hostname = data is stored by node name which defaults to hostname. Running ‘docker logs testrabbit’:<br/><br/>

            <code>

                        RabbitMQ 3.6.8. Copyright (C) 2007-2016 Pivotal Software, Inc.<br/>
            ##  ##      Licensed under the MPL.  See <a href="http://www.rabbitmq.com/">http://www.rabbitmq.com/</a><br/>
            ##  ##<br/>
            ##########  Logs: tty<br/>
            ######  ##        tty<br/>
            ##########
                        Starting broker...<br/>

            =INFO REPORT==== 21-Mar-2017::22:03:10 ===<br/>
            Starting RabbitMQ 3.6.8 on Erlang 19.2<br/>
            Copyright (C) 2007-2016 Pivotal Software, Inc.<br/>
            Licensed under the MPL.  See <a href="http://www.rabbitmq.com/">http://www.rabbitmq.com/</a><br/>

            =INFO REPORT==== 21-Mar-2017::22:03:10 ===<br/>
            node           : rabbit@benny<br/>
            home dir       : /var/lib/rabbitmq<br/>
            config file(s) : /etc/rabbitmq/rabbitmq.config<br/>
            cookie hash    : 6pi9i4DlRpNzNYnu28csYA==<br/>
            log            : tty<br/>
            sasl log       : tty<br/>
            database dir   : /var/lib/rabbitmq/mnesia/rabbit@benny<br/>

            =INFO REPORT==== 21-Mar-2017::22:03:12 ===<br/>
            Memory limit set to 792MB of 1980MB total.<br/>

            =INFO REPORT==== 21-Mar-2017::22:03:12 ===<br/>
            Disk free limit set to 50MB<br/>

            </code><br/>

            You can see ‘node’ and ‘database dir’ point to hostname.

            To access management console: <a href="http://localhost:8088">http://localhost:8088</a>
        </div>
    </div>;


let Home = () => (
    <div>
        <BlogSnippet>{snippet1}</BlogSnippet>
        <BlogSnippet>{snippet2}</BlogSnippet>
    </div>    
);

let OldBlogs = ({match}) => (
    <div>
        <hr/>
        <div>Old Blogs - {match.url}</div>
        <div>
           <NavLink to={match.url + "/blogdetail"}>Blog Details</NavLink>
           <Route path={`${match.url}/blogdetail`} component={BlogDetail}></Route>
        </div>
    </div>
);

let BlogDetail = ({match}) => (
    <div>
        <hr/>
        Blog Details
    </div>
);

let NoMatch = () => (
    <div>
        <hr/>
        No match for path <code>{location.pathname}</code>
    </div>
);


class OlderBlogs extends React.Component
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

class Layout extends React.Component {
/*
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!', newProps)
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('Component SHOULD COMPONENT UPDATE!', newProps, newState)
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
*/

    render() {
        return (
            <div>   
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="#">&nbsp;</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-link active"><NavLink to="/">Home</NavLink></li>
                            <li className="nav-item nav-link"><NavLink to="/old">Old Blogs</NavLink></li>
                            <li className="nav-item nav-link"><NavLink to="/older">Older Blogs</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/old" component={OldBlogs}></Route>
                        <Route path="/older" component={OlderBlogs}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </main>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                 <BrowserRouter>
                    <Layout />
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));