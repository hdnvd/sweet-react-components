/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Image from "./nativeAdapter/Image";
import View from "./nativeAdapter/View";
import Text from "./nativeAdapter/Text";
import StyleSheet from "./nativeAdapter/StyleSheet";
import SweetCheckBox from "./SweetCheckBox";

export default class SwitchRow extends Component {
    render() {
        return (
            <View style={this.props.style!=null?this.props.style:Styles.row} flexDirection={'row-reverse'}>
                {this.props.logo != null &&
                    <View style={this.props.itemLogoContainerStyle!=null?this.props.itemLogoContainerStyle:Styles.itemLogoContainerStyle} >
                        <Image style={this.props.itemLogoStyle!=null?this.props.itemLogoStyle:Styles.ItemLogo} source={this.props.logo}/>
                    </View>
                }
                <Text style={this.props.captionStyle!=null?this.props.captionStyle:Styles.caption}>{this.props.title} </Text>
                <SweetCheckBox style={this.props.contentStyle!=null?this.props.contentStyle:Styles.content} value={this.props.content}/>
            </View>);
    }
}


const Styles=StyleSheet.create({

    row:
        {
            paddingHorizontal: 10,
            marginVertical:2,
            paddingVertical: 10,
            flexDirection: 'row-reverse',
            width: '100%',
        },

    itemLogoContainerStyle:
        {

            height: Window.width*0.08,
            width: Window.width*0.08,
            marginHorizontal:Window.width*0.01,
            position: 'relative',
            right: 0,
            backgroundColor:'#ffffff',
        },

    caption:
        {

            textAlign: 'right',
            fontSize: 13,
            fontWeight: '400',
            fontFamily: 'IRANSansMobile',
            color:'#232323',
        },
    content:
        {

            textAlign: 'right',
            fontSize: 13,
            fontFamily: 'IRANSansMobile',
            width: '85%',
            color:'#232323',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical:'center',
            flex: 1,
            // backgroundColor:'#ee000e',
        },

    ItemLogo:
        {
            width:'100%',
            height:'100%',
        },
});
