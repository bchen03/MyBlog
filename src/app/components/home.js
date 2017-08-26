import React from "react";
import { BlogSnippet } from "./blogsnippet";

export let Home = () => (
    <div>
        <BlogSnippet title={"Redux"} date={"January 12, 2017"}>{snippet1}</BlogSnippet>
        <BlogSnippet title={"RabbitMQ"} date={"March 20, 2017"}>{snippet2}</BlogSnippet>
    </div>    
);

const snippet1 =
        <div>
            An implementation of Flux where data store listens for actions, 
            and uses a function called a reducer to return a new app state 
            for each action. Key point is app state is immutable, reducers 
            take inputs and return outputs with no side-effects (updates to
                global state, calling setters on existing objects, etc).<br/>

            Facebook Flux diagram: <a href="http://redux.js.org/">http://redux.js.org/ ...</a>
        </div>;

const snippet2 = 
        <div>
            Docker RabbitMQ link: <a href="https://hub.docker.com/_/rabbitmq/">https://hub.docker.com/_/rabbitmq/</a><br/>
            Download: docker pull rabbitmq<br/>
            Run: docker run -d --hostname benny --name testrabbit –p 8088:15672 –p 5672:5672 rabbitmq<br/>
            Show info log: docker logs testrabbit ...<br/>
        </div>;


const snippet3 = 
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
        </div>;


