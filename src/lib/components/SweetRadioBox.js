/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';
import PickerBox from './PickerBox';
import View from "./nativeAdapter/View";
import StyleSheet from "./nativeAdapter/StyleSheet";
import {MDBContainer, MDBInput, MDBRow} from "mdbreact";

export default class SweetRadioBox extends PickerBox {
    showEmptyTitle=false;
    getItem=(item,itemTitle,itemValue)=>{
        console.log(this.props.selectedValue+":"+itemValue);
        return <MDBInput gap onClick={()=>{this.props.onValueChange(itemValue);}} checked={this.props.selectedValue==itemValue} label={itemTitle} type="radio"/>;
    };
    render() {
        const OptionViews=this.getItemViews();
        return (
            <View className={'radiobox '+this.props.className||''}>
                <MDBContainer>
                    <MDBRow>
                    {OptionViews}
                    </MDBRow>
                </MDBContainer>
            </View>);
    }
}


const styles=StyleSheet.create(
    {
        container:{
            backgroundColor: '#fff', width: '80%', height: 170, justifyContent: 'center', alignSelf: 'center',
            shadowColor: '#1f1f1f',
            position: 'absolute',
            zIndex: 2,
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.22,
            elevation: 5,
            borderRadius: 15,
        },
        touchableOpacity:{width: '100%', paddingVertical: 10, alignItems: 'center'},
        itemContainer:{
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            width: '70%',
            marginBottom: 10,
        },
        itemText:{
            textAlign: 'center',
            fontFamily: 'IRANSansMobile'
        },
    });
