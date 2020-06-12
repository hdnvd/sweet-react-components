/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import View from "./nativeAdapter/View";
import Text from "./nativeAdapter/Text";
import Image from "./nativeAdapter/Image";

export default class IconItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogoVisible: props.displayLogo != null ? props.displayLogo : false,
    };
  }
  render() {
    return (
      <View
        className={'sc-icon-item-style'}>
        {!this.state.isLogoVisible && (
          <Text
              className={'sc-icon-item-title'}>{this.props.title} </Text>
        )}
        {this.state.isLogoVisible && (
          <Image
              className={'sc-icon-item-logo'} source={this.props.logo} />
        )}
        <Text
            className={'sc-icon-item-content'}>{this.props.content}</Text>
      </View>
    );
  }
}
