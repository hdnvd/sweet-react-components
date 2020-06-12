/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import StyleSheet from "./nativeAdapter/StyleSheet";
import {MDBBtn, MDBIcon} from 'mdbreact';

export default class SweetSwitch extends Component {

    render() {
        const color=this.props.enabled?"unique":"blue-grey";
        return (
            <MDBBtn className={'sweettoggle'} color={color} onClick={this.props.toggle}><MDBIcon fa icon={this.props.icon} className="pr-1" />{this.props.title}</MDBBtn>
        );
    }
}

const Styles=StyleSheet.create({

    SweetButton:
        {
            borderRadius: 8,
            minHeight: 45,
            height: 45,
            width: Window.width * 0.50,
            marginHorizontal: '8%',
            marginVertical: 5,
            backgroundColor: "#051841",
            alignSelf: 'center',
        },
    SweetButtonWaitDialogContainer:
        {
            height: '100%'
        },
    SweetButtonWaitDialog:
        {
            // height:'100%',
            paddingVertical: 10,
        },
    SweetButtonTextContainer:
        {
            paddingVertical: 10,
            height: '100%',
            flexDirection:'row-reverse',
        },
    SweetButtonText:
        {
            fontFamily: 'IRANSansMobile',
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 13,
            color: '#ffffff',
        },
});

