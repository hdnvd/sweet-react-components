/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import React, { Component } from 'react';
import Calendar from 'react-modern-calendar-datepicker';
import {MDBModal} from "mdbreact";
import View from "./nativeAdapter/View";
import StyleSheet from "./nativeAdapter/StyleSheet";

export default class SweetDatePickerModal extends Component{

    render() {
        const BorderColor=this.props.BorderColor;
        const datePickerContainerStyle=[Styles.datepickercontainer,{borderColor:BorderColor}];
        return (
            <MDBModal isOpen={this.props.visible} transparent={true} animationType={'fade'} toggle={this.props.onRequestClose}>
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <View style={datePickerContainerStyle}>
                    <Calendar
                        onChange={this.props.onDateChange}
                        shouldHighlightWeekends
                        style={datePickerContainerStyle}
                        locale="fa" // add this
                    />

                </View>
                </View>
            </MDBModal>);
    }
}

SweetDatePickerModal.defaultProps = {
};

const Styles=StyleSheet.create({

    datepickercontainer:
        {
            // maxHeight: Window.height*0.4,
            // height:Window.height*0.4,
            backgroundColor: '#ffffff',
            borderRadius:10,
            padding: 20,
            marginVertical: 7,
            marginHorizontal: 7,
            borderWidth:2,
        },

    datepickertext:
        {
            direction: 'rtl',
            fontFamily: 'IRANSansMobile',
        },
});
