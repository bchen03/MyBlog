import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { Home } from "./home"
import { Archives } from "./archives"
import { About } from "./about";
import { NoMatch } from "./nomatch"

export class Layout extends React.Component {
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
                            <li className="nav-item nav-link"><NavLink to="/archives">Archives</NavLink></li>
                            <li className="nav-item nav-link"><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/archives" component={Archives}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

