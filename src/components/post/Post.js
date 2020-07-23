import React, { Component } from 'react';
import axios from 'axios';

//components
import TagLine from './Tagline';
import Counter from './Counter';
import ActionBox from './ActionBox';

import Image from './Image';

export class Post extends Component {
  state = {
    posts: null
  }
  componentDidMount(){
      axios.get()
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        })
      }) 
      .catch(err => console.log(err));
  }

  render() {
    let recentPostMarkup = this.state.posts ? (
      this.state.posts.map(post => <p>{post.username}</p>)
    ) :<p>loading...</p>
    return (
      <div
        style={{
          height: '100%',
          maxWidth: '1024px',
          marginRight: '20px',
          display: 'inline-block',
        }}
      >
        <TagLine
          username={recentPostMarkup}
          fullName={this.props.fullName}
        />
        <Image imageUrl={this.props.imageUrl}/>
        <img src="" alt=""></img>
        <Counter />
        <ActionBox />
      </div>
    );
  }
}

export default Post;
