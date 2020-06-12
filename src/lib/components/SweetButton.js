// @flow

import * as React from "react";
import {MDBBtn} from 'mdbreact';
import {Component} from "react";
class SweetButton extends Component{
    static defaultProps = {
        color: undefined,
        gradient: undefined,
    };
    constructor(props) {
        super(props);
        this.state = {
            message:this.props.value,
        };
        };

        render()
        {
            return <MDBBtn/>
        }


}
export default SweetButton;
