/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import View from "./View";
export default class Text extends React.Component {
    render() {

        return (
            <View {...this.props}>
                {this.props.children}
            </View>);
    }
}

