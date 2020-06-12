/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
export default class ScrollView extends React.Component {
    render() {

        return (
            <div className={this.props.className===undefined?'scrollview':this.props.className} {...this.props}>
            <div style={this.props.contentContainerStyle}>
                {this.props.children}
            </div>
            </div>);
    }
}

