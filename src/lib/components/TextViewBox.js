/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
export default class TextViewBox extends React.Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <label
                    className='form-control'
                    id={this.props.id}
                    {...this.props}>

                {this.props.value}
                </label>
            </div>
        );
    }
}

