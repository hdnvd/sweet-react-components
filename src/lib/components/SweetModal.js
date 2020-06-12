/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {MDBModal} from "mdbreact";
import TouchableHighlight from "./nativeAdapter/TouchableHighlight";
import View from "./nativeAdapter/View";
export default class SweetModal extends Component{
    render() {
        return (
            <MDBModal transparent={true} animationType={'fade'} isOpen={this.props.visible} {...this.props}>
                <TouchableHighlight activeOpacity={0}
                                    underlayColor='#fff'
                                    onPress={this.props.onHideRequest}>
                    <View style={{
                        height:'100%',
                        width:'100%',
                        justifyContent: 'center',
                        backgroundColor:'rgba(0,0,0,0.6)',
                        alignItems: 'center'}}>
                        <View style={{backgroundColor:'#fff',borderRadius:10,padding:10,width:'80%',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            {this.props.children}
                        </View>
                    </View>
                </TouchableHighlight>
            </MDBModal>);
    }
}
