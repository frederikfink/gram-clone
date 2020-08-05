import React, { Component } from 'react'

export class Upload extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Upload
