import React from "react";
import logo from '../../images/logo.png';


export let Header = () => (
    <div>
        <div className="row align-items-center blog-header">
            <img src={logo} className="logo col-md-1"/>
            <div className="col-md-5">So you want to be a developer...</div>
            <div className="col-md-6 text-right">
                Sign In
            </div>
        </div>
    </div>
);