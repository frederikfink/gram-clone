import React, { Component } from 'react'

import Post from '../post/Post';

export class Feed extends Component {
    render() {
        return (
            <div style={{height: "93vh", width: "100%", paddingTop: "64px", whiteSpace: "nowrap", overflow: "auto"}}>
                <div style={{position: "fixed", width: "7%", height: "100%", background: "rgb(0,0,0)", background: "linear-gradient(90deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0) 100%)"}}></div>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"3w7i4cdhmac51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"y9pw7s5bbsb51.jpg"}/>
                <Post username={"babser"} fullName={"blå & gul"} imageUrl={"i6x9rxh9acc51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"q7hu97zvjac51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"wzkuvlxte7c51.jpg"}/>

                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"3w7i4cdhmac51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"y9pw7s5bbsb51.jpg"}/>
                <Post username={"BananMan"} fullName={"Jens Emil Fink Højriis"} imageUrl={"i6x9rxh9acc51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"q7hu97zvjac51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"wzkuvlxte7c51.jpg"}/>

                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"3w7i4cdhmac51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"y9pw7s5bbsb51.jpg"}/>
                <Post username={"BananMan"} fullName={"Jens Emil Fink Højriis"} imageUrl={"i6x9rxh9acc51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"q7hu97zvjac51.jpg"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"} imageUrl={"wzkuvlxte7c51.jpg"}/>
            </div>
        )
    }
}

export default Feed
