import React, { Component } from 'react'

import LikeIcon from '../../icons/heart-2.png';
import SearchIcon from '../../icons/zoom-2.png';
import Upload from '../../icons/square-upload.png';
import UserImage from '../../images/cv_img.png';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <div style={{ width: "100%", borderBottom: "1px solid #393939", position: "fixed" }}>
                <div style={{ width: "88%", height: "64px", margin: "auto", display: "flex", alignItems: "center" }}>
                    <Link to="/"><button><h1>gramclone</h1></button></Link>
                    <div style={{ marginLeft: "auto" }}>
                        <ul>
                            <li>
                            <Link to="/"><button><img src={LikeIcon} alt="" style={{ width: "20px" }}></img></button></Link>
                            </li>
                            <li>
                            <Link to="/"><button><img src={SearchIcon} alt="" style={{ width: "20px" }}></img></button></Link>
                            </li>
                            <li>
                            <Link to="/upload"><button><img src={Upload} alt="" style={{ width: "20px" }}></img></button></Link>
                            </li>
                            <li>
                            <Link to="/"><button><img src={UserImage} alt="" style={{ width: "20px" }}></img></button></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default Navbar
