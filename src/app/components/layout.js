import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { Home } from "./home"
import { Archives } from "./archives"
import { About } from "./about";
import { NoMatch } from "./nomatch"
import { BlogDetail } from "./blogdetail";

export class Layout extends React.Component {

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

/*    componentDidMount() {
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
                <div className="row align-items-center header-bar">
                    <div className="col-md-3 header-bar-text">
                        Blogs
                    </div>
                    <div className="col-md-8">
                        <NavLink className="subheader-nav" to="/">Home</NavLink>
                        <NavLink className="subheader-nav" to="/archives">Archives</NavLink>
                        <NavLink className="subheader-nav" to="/about">About</NavLink>
                    </div>
                </div>
                <div className="row">
                    <main className="col-md-12">
                        <Switch>
                            <Route path="/" exact component={(props) => <Home search="" {...props} />}></Route>
                            <Route path="/archives" component={Archives}></Route>
                            <Route path="/about" component={About}></Route>
                            
                            
                            <Route component={NoMatch}></Route>
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

const BlogRoutes = ({ component, ...rest }) => {
    return (
      <div>
        <Route {...rest} render={ () => React.createElement(component) } />
      </div>
    );
  };