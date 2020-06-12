/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Text from "./Text";
export default class ActivityIndicator extends React.Component {
    render() {

        return (
            <div {...this.props}>
                {this.props.waiting && <Text>waiting...</Text> }
            </div>);
    }
}

