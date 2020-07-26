import React, { Component } from 'react'

export class Image extends Component {
    render() {
        return (
            <div style={{ height: "80%" }}>
                <img src={require(`../../images/3w7i4cdhmac51.jpg`)} alt="post Image" style={{height: "100%", marginTop: "10px", borderRadius: "4px"}}></img>
            </div>
        )
    }
}

export default Image
