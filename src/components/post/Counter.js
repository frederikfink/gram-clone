import React, { Component } from 'react'

export class Counter extends Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <h6>62,219 likes</h6>
                <h6 style={{marginLeft: "10px"}}>130 comments</h6>
            </div>
        )
    }
}

export default Counter
