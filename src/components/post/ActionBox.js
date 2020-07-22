import React, { Component } from 'react';

//img
import LikeIcon from '../../icons/heart-2.png';
import SearchIcon from '../../icons/zoom-2.png';
import Bookmark from '../../icons/bookmark-2.png';
import { func } from 'prop-types';

export class ActionBox extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    return (
      <div
        style={{
          width: '100%',
          height: '48px',
          backgroundColor: '#222625',
          borderRadius: '4px',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ul style={{width: "100%"}}>
          <li>
            <button onClick={handleClick}>
              <img src={LikeIcon} alt="" style={{ width: '20px'}}></img>
            </button>
          </li>
          <li>
            <button onClick={handleClick}>
              <img src={SearchIcon} alt="" style={{ width: '20px' }}></img>
            </button>
          </li>
          <li style={{ float: 'right'}}>
            <button onClick={handleClick}>
              <img src={Bookmark} alt="" style={{ width: '20px' }}></img>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActionBox;
