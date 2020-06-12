/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
export default class TouchableHighlight extends React.Component {
    render() {

        return (
            <a href={""} onClick={this.props.onPress} {...this.props}>
                {this.props.children}
            </a>);
    }
}

