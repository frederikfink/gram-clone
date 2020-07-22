import React, { Component } from 'react'

export class Tagline extends Component {
    render() {
        return (
            <div style={{display: "flex", marginTop: "20px"}}>
            <p style={{fontWeight: "600" }}>{this.props.username}</p>
            <p style={{fontWeight: "400", marginLeft: "10px", color: "#ebebeb"}}>{this.props.fullName}</p>
        </div>
        )
    }
}

export default Tagline
