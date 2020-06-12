/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TouchableHighlight from "./nativeAdapter/TouchableHighlight";
import Text from "./nativeAdapter/Text";
import View from "./nativeAdapter/View";
import StyleSheet from "./nativeAdapter/StyleSheet";

export default class TimeSelector extends Component {
    BorderColor=this.props.BorderColor;
    constructor(props) {
        super(props);
        this.state = { isDateTimePickerVisible: false };
    }
    render() {
        return (
            <TouchableHighlight onPress={() => this.setState({isDateTimePickerVisible: true})}>
                <View>
                    <Text style={Styles.inputLabel}>{this.props.title}</Text>
                    not implemented
                </View>
            </TouchableHighlight>);
    }
}

TimeSelector.defaultProps = {
};
const Styles=StyleSheet.create({

    input:
        {
            fontSize: 10,
            minHeight: 36,
            height: 41,
            textAlign: 'right',
            direction: 'rtl',
            fontFamily: 'IRANSansMobile',
            width: '94%',
            marginHorizontal: '2%',
            backgroundColor: "#ffffff",
            borderRadius: 5,
            marginTop: '2%',
            borderWidth: 1,
        },
    inputLabel:
        {
            fontSize: 12,
            textAlign: 'right',
            direction: 'rtl',
            fontFamily: 'IRANSansMobile',
            width: '94%',
            marginHorizontal: '2%',
            marginTop: '2%',
        },
});

