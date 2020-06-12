/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TouchableHighlight from "./nativeAdapter/TouchableHighlight";
import StyleSheet from "./nativeAdapter/StyleSheet";
import View from "./nativeAdapter/View";
import Text from "./nativeAdapter/Text";

export default class SweetCheckBox extends Component {
    render() {
        return (
            <TouchableHighlight onPress={()=> {
                    this.props.onPress();
                    this.props.onValueChange(!this.props.checked);
            }}>
            <View style={this.props.style} flexDirection={'row'}>

                <Text style={this.props.textStyle}>{this.props.title}</Text>
                {this.props.checked &&
                <View>checked</View>}
                {!this.props.checked &&

                <View>not checked</View>}
            </View>
            </TouchableHighlight>);
    }
}


const Styles=StyleSheet.create({

});
