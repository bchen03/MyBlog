import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from "react-router-dom";
import  PropTypes from "prop-types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Layout } from "./components/layout";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.scss';


// Actions


// Reducers
const blogReducer = (state = {}, action) => {
    return state;
};

const sidenavReducer = (state = {}, action) => {
    return state;
};


const store = createStore(
    combineReducers({ blogReducer, sidenavReducer }), 
    {},
    applyMiddleware(
        thunkMiddleware, 
        createLogger()
    )
);


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                    <div className="container-fluid"/>
                        <Header />
                        <BrowserRouter>
                            <Layout />
                        </BrowserRouter>
                        <Footer />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
