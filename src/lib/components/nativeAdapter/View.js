/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
export default class View extends React.Component {
    render() {

        return (
            <div {...this.props}>
                {this.props.children}
            </div>);
    }
}

