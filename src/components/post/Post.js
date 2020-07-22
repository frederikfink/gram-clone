import React, { Component } from 'react';

//components
import TagLine from './Tagline';
import Counter from './Counter';
import ActionBox from './ActionBox';

import Image from './Image';

export class Post extends Component {
  render() {

    var imageToLoad = new Image();
    function loadImage() {
    imageToLoad.onload = function() {
        console.log("finish loading");
    };        
    imageToLoad.src = "https://www.w3schools.com/w3images/mac.jpg";
  }
  loadImage();

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
          username={this.props.username}
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
