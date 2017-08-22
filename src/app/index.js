import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

let Header = () => (
    <div>
        <div className="row align-items-center blog-header">
            <div className="col-md-6">
                My Blog - So you want to be a developer...
            </div>
            <div className="col-md-3" />
            <div className="col-md-3 text-right">
                Sign In
            </div>
        </div>
        <hr/>
    </div>
);

let Footer = () => (
    <div>
        <hr/>
        My Blog @2017
     </div>
);

let Layout = () => (
    <div>
        <div className="nav nav-bar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/old" exact>Old Blogs</NavLink></li>
            </ul>
        </div>
        <main>
            <Route path="/" exact component={Home}></Route>
            <Route path="/old" component={OldBlogs}></Route>
        </main>
    </div>
);

let Home = () => (
    <div>Home</div>
);

let OldBlogs = () => (
    <div>Old Blogs</div>
);

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