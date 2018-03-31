import React, { Component } from 'react';
import './Uploader.css';
import Dropzone from 'react-dropzone';

class Uploader extends Component {
    constructor () {
        super();
        this.state = {
            files: []
        }
    }

    onDrop = (files) => {
        this.setState({ files });
    }

    render () {
        return (
            <div className="uploader">
                <Dropzone className="dropzone" onDrop={this.onDrop} multiple={false}>
                    Upload Image
                </Dropzone>
                <h4>Drop files</h4>
                <ul>
                    { this.state.files.map(e => <li>{e.name} - {e.size} bytes</li>) }
                </ul>
            </div>
        )
    }
}

export default Uploader;