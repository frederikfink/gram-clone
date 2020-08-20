import React, { Component } from 'react'

export class Upload extends Component {
    render() {
        return (
            <div style={{width: "88%", margin: "auto"}}>
                <div style={{display: "flex"}}> 
                    <div className="uploadControls" style={{width: "30%", border: "1px solid red", borderRadius: "4px"}}>
                        <div className="dragNDrop" >Drag n drop</div>
                        <div className="manualUpload">choose file</div>
                    </div>
                    <div className="uploadPreview" style={{width: "70%", border: "1px solid red", borderRadius: "4px"}}>preview<br/>1000 x 1000 px</div>
                </div>
                <button>Upload</button>
            </div>
        )
    }
}

export default Upload
