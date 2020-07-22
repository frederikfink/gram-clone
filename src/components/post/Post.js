import React, { Component } from 'react';

//components
import TagLine from './Tagline';
import Counter from './Counter';
import ActionBox from './ActionBox';
import sizeOf from "image-size";

import PostImage from '../../images/y9pw7s5bbsb51.jpg';

export class Post extends Component {
    handleSize(image) {
        console.log(image.offsetWidth, image.offsetHeight)
    }

  render() {

    return (
      <div style={{height: "100%", maxWidth: "1024px", marginRight: "20px", display: "inline-block"}}>
        <TagLine username={this.props.username} fullName={this.props.fullName}/>
        <div style={{backgroundImage: `url(${PostImage})`, backgroundSize: "cover", width: "800px", height: "80%", borderRadius: "4px", margin: "10px 36px 8px 0"}}>
        </div>
        <Counter />
        <ActionBox />
      </div>
    );
  }
}

export default Post;
