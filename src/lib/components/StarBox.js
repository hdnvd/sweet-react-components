/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Image from "./nativeAdapter/Image";
import TouchableHighlight from "./nativeAdapter/TouchableHighlight";
import View from "./nativeAdapter/View";
import StyleSheet from "./nativeAdapter/StyleSheet";

export default class StarBox extends Component {
    starNum=5;
    filledImage=require('./images/icons/star/starfilled.png');
    emptyImage=require('./images/icons/star/starwhite.png');
    _getStar(index,isSelected)
    {
        const image=<Image style={this.props.starStyle==null?styles.star:this.props.starStyle} source={isSelected?this.filledImage:this.emptyImage}/>;
        if(this.props.onValueChange!=null){
        return <TouchableHighlight onPress={()=>{this.props.onValueChange(index+1)}}>
            {image}
        </TouchableHighlight>;
        }
        else
            return image;
    };
    render() {
        let i;
        const rate=Math.round(this.props.rate);
        let starArray=[];
        for(i=0;i<rate;i++)
            starArray[i]=this._getStar(i,true);
        for(i=Math.max(rate,0);i<this.starNum;i++)
            starArray[i]=this._getStar(i,false);
        return (
            <View {...this.props}>
            <View style={styles.container}>
                {starArray}
            </View>
            </View>);
    }
}

const styles=StyleSheet.create(
    {
       container:
           {
                flexDirection:'row',
           },
        star:{
           height: 30,
            width: 30,
            marginHorizontal:5,
        }
    });

