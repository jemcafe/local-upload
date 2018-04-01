import React, { Component } from 'react';
import Aux from './Aux';
import Dropzone from 'react-dropzone';
import upload from 'superagent';

class Uploader extends Component {
    constructor () {
        super();
        this.state = {
            files: [],
            image: ''
        }
    }

    onDrop = (files) => {
        console.log(files);
        this.setState({ files });
    }

    upload = (e) => {
        e.preventDefault();
        const { files } = this.state;

        upload.post('/upload')
        .attach('image', files[0])
        .end((err, res) => {
            if (err) { 
                console.log(err);
                console.log('Error', res.body);
            } else {
                console.log('File uploaded', res.body);
                this.setState({ image: res.body.file });
            }
        });
    }

    render () {
        return (
            <Aux>
                <form onSubmit={this.upload} style={form}>
                    <div className="uploader" style={uploader}>
                        <Dropzone className="dropzone" style={dropzone} onDrop={this.onDrop} multiple={false}>
                            Upload Image
                        </Dropzone>
                        <h4>Drop files</h4>
                        <ul>
                            { this.state.files.map((e, i) => <li key={i}>{e.name} - {e.size} bytes</li>) }
                        </ul>
                    </div>
                    <div className="btn">
                        <input type="submit" style={btn}/>
                    </div>
                </form>
                { this.state.image && <img src={this.state.image} alt="pic" style={{maxWidth: '80%'}}  /> }
            </Aux>
        )
    }
}

export default Uploader;

// CSS
const form = {
    margin: '30px 0'
}
const uploader = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
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
const btn = {
    outline: 'none', 
    background: 'lightgrey', 
    border: 'none', 
    padding: '8px 10px', 
    borderRadius: '4px', 
    cursor: 'pointer'
}