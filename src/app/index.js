import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import  PropTypes from "prop-types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Layout } from "./components/layout";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.scss';

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