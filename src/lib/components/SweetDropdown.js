/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import StyleSheet from "./nativeAdapter/StyleSheet";
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdbreact";

export default class SweetDropdown extends Component {
    render() {
        return (
            <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                    MDBDropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>);
    }
}


const Styles=StyleSheet.create({

});
