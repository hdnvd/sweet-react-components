/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ModalImage from "react-modal-image";

export default class ImageModal extends Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                {this.props.previewImage!='' &&
                <ModalImage
                    small={this.props.previewImage}
                    large={this.props.previewImage}
                    className={'imageuploadpreview'} />
                }
            </div>
        );
    }
}

