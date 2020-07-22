import React, { Component } from 'react'

import Post from '../post/Post';

export class Feed extends Component {
    render() {
        return (
            <div style={{height: "93vh", width: "100%", paddingTop: "64px", whiteSpace: "nowrap", overflow: "auto"}}>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"}/>
                <Post username={"bareFink"} fullName={"Frederik Fink Højriis"}/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }
}

export default Feed
