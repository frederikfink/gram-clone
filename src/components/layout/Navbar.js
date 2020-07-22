import React, { Component } from 'react'

import LikeIcon from '../../images/heart-2.png';
import SearchIcon from '../../images/zoom-2.png';
import UserImage from '../../images/cv_img.png';

export class Navbar extends Component {
    render() {
        return (
            <div style={{width: "100%", borderBottom: "1px solid #393939", position: "fixed"}}>
                <div style={{width: "88%", height: "64px", margin: "auto", display: "flex", alignItems: "center"}}>
                    <a href="https://github.com/frederikfink/gram-clone"><h1>gramclone</h1></a>
                    <div style={{marginLeft: "auto"}}>
                        <ul>
                            <li>
                            <a href="https://github.com/frederikfink/gram-clone"><img src={LikeIcon} alt="" style={{width: "20px"}}></img></a>
                            </li>
                            <li>
                            <a href="https://github.com/frederikfink/gram-clone"><img src={SearchIcon} alt="" style={{width: "20px"}}></img></a>
                            </li>
                            <li>
                            <a href="https://github.com/frederikfink/gram-clone"><img src={UserImage} alt="" style={{width: "20px"}}></img></a> 
                            </li>
                        </ul>
                    </div>   
                </div>
            </div>  
        )
    }
}

export default Navbar
