/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
export default class FileSelector extends Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <input
                    className='form-control file'
                    readOnly={this.props.readOnly}
                    id={this.props.id}
                    group
                    type='file'
                    onChange={(event)=>{
                        let file=event.target.files[0];
                        this.props.onConfirm(file);
                    }}
                />
            </div>
        );
    }
}

