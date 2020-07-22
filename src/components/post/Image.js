import React, { Component } from 'react'

export class Image extends Component {
    render() {
        return (
            <div style={{ height: "80%" }}>
                <img src={require(`../../images/${this.props.imageUrl}`)} alt="post Image" style={{height: "100%", marginTop: "10px", borderRadius: "4px"}}></img>
            </div>
        )
    }
}

export default Image
