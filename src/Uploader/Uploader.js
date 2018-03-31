import React, { Component } from 'react';
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
            <div className="uploader" style={uploader}>
                <Dropzone className="dropzone" style={dropzone} onDrop={this.onDrop} multiple={false}>
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

// CSS
const uploader = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px'
}
const dropzone = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    border: '2px dashed #7b727c',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#383338',
    background: '#ffffff7e',
}