import React from "react";
import logo from '../../images/logo.png';


export let Header = () => (
    <div>
        <div className="row align-items-center blog-header">
            <div className="col-md-8">
                <img src={logo} className="logo" />
                <span className="px-2"><b>Code Zen</b> | So you want to be a developer...</span>
            </div>
            <div className="col-md-4 text-right">
                Sign In
            </div>
        </div>
        <div className="row align-items-center header-bar">
            <div className="col-md-12 header-bar-text">
                Blogs
            </div>
        </div>
    </div>
);