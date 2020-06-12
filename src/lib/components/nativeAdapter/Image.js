/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import View from "./View";
export default class Image extends React.Component {
    render() {

        return (
            <img src={this.props.source} {...this.props}/>);
    }
}

