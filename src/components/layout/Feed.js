import React, { Component } from 'react'
import axios from 'axios';

import Post from '../post/Post';

export class Feed extends Component {
    state = {
        posts: null
    }
    
    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                console.log(res.data);
                this.setState({
                    posts: res.data
                })
        })
        .catch(err => console.log(err));
    }

    render() {
        let recentPostsMarkup = this.state.posts ? (
            this.state.posts.map((post) => <Post key={post.postID} username={post.username} fullName={post.fullName} />)
        ) : <p>loading...</p>
        return (
            <div style={{height: "93vh", width: "100%", whiteSpace: "nowrap", overflow: "auto"}}>
                {recentPostsMarkup}
            </div>
        )
    }
}

export default Feed
