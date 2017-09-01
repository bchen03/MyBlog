import React from "react";
import { Route, NavLink } from "react-router-dom";

export let Archives = ({match}) => (
    <div>
        <hr/>
        <div>
            <dd>
                <dl><NavLink to={match.url + "/whyarchive"}>Why Archive?</NavLink></dl>
                <dl><NavLink to={match.url + "/2017"}>2017</NavLink></dl>
                <dl><NavLink to={match.url + "/2016"}>2016</NavLink></dl>
                <dl><NavLink to={match.url + "/2015"}>2015</NavLink></dl>
            </dd>
           <Route path={`${match.url}/whyarchive`} component={WhyArchive}></Route>
           <Route path={`${match.url}/2017`} component={Archive2017}></Route>
           <Route path={`${match.url}/2016`} component={Archive2016}></Route>
           <Route path={`${match.url}/2015`} component={Archive2015}></Route>
        </div>
    </div>
);

let WhyArchive = ({match}) => (
    <div>
        <hr/>
        Why Archive? <br/>
        Archives allow you to see previous articles, tips, and tricks that I've<br/>
        demoed that emphasize best practices, cool code, and special tricks and gotcha's<br/>
        that only pros like me know about. You fools should get down on your hands<br/>
        and knees and pray to me for allowing me to bestow this hard earned knowledge.<br/>
    </div>
);

let Archive2017 = ({match}) => (
    <div>
        <hr/>
        <dd>
            <dl><NavLink to={match.url + "/January"}>January</NavLink></dl>
            <dl><NavLink to={match.url + "/February"}>February</NavLink></dl>
            <dl><NavLink to={match.url + "/March"}>March</NavLink></dl>
        </dd>
        <Route path={`${match.url}/January`} component={January2017}></Route>
        <Route path={`${match.url}/February`} component={February2017}></Route>
        <Route path={`${match.url}/March`} component={March2017}></Route>
    </div>
);

let Archive2016 = ({match}) => (
    <div>
        Archive2016
    </div>
);

let Archive2015 = ({match}) => (
    <div>
        Archive2015
    </div>
);

let January2017 = ({match}) => (
    <div>
        January 2017
    </div>
);

let February2017 = ({match}) => (
    <div>
        February 2017
    </div>
);

let March2017 = ({match}) => (
    <div>
        March 2017
    </div>
);
