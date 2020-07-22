import React, { Component } from 'react'

//img
import LikeIcon from '../../images/heart-2.png';
import SearchIcon from '../../images/zoom-2.png';
import Bookmark from '../../images/bookmark-2.png';

export class ActionBox extends Component {
    render() {
        return (
            <div style={{width: "100%", height: "48px", backgroundColor: "#222625", borderRadius: "4px", marginTop: "8px", display: "flex", alignItems: "center"}}>
                <ul>
                    <li><a href="https://github.com/frederikfink/gram-clone"><img src={LikeIcon} alt="" style={{width: "20px"}}></img></a></li>
                    <li><a href="https://github.com/frederikfink/gram-clone"><img src={SearchIcon} alt="" style={{width: "20px"}}></img></a></li>
                </ul>
                <div style={{marginLeft: "auto"}}>
                    <li style={{marginRight: "16px"}}><a href="https://github.com/frederikfink/gram-clone"><img src={Bookmark} alt="" style={{width: "20px"}}></img></a></li>
                </div>
            </div>
        )
    }
}

export default ActionBox
