/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';
import PickerBox from './PickerBox';
import View from "./nativeAdapter/View";
export default class SweetButtonRadioBox extends PickerBox {
    showEmptyTitle=false;
    getItem=(item,itemTitle,itemValue,itemLogo)=>{
        const checked=this.props.selectedValue==itemValue;
        const checkedClassName=checked?'checked':'unchecked';
        return <a className={'sweetbuttonradioitem sweetbuttonradioitem'+itemValue+" "+checkedClassName} onClick={()=>{this.props.onValueChange(itemValue);}}><div>
            {checked &&
            <span className={'fa fa-check sweetbuttonradiocheckicon'}/>
            }
            {itemLogo !== undefined &&
                <img className={'sweetbuttonradioitemlogo'} src={itemLogo}/>
            }
                {itemTitle}
        </div></a>;
    };
    render() {
        const OptionViews=this.getItemViews();
        return (
            <View className={'sweetbuttonradiobox '+this.props.className||''}>
                <div className={'sweetbuttonradioboxtitle'}>{this.props.title}</div>
                <div className={'sweetbuttonradioboxitems'}>
                    &nbsp;
                    {OptionViews}
                </div>
            </View>);
    }
}

