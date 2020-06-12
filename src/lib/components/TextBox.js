/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default class TextBox extends React.Component {
    render() {
        let inputType='text';
        let pattern=undefined;
        if(this.props.keyboardType!=null)
        {
            if(this.props.keyboardType.trim().toLowerCase()==='numeric'){
                inputType='number';
                pattern="[0-9]*";
            }
        }
        if(this.props.type==='password')
            inputType='password';
        return (
            <div className='form-group'>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                {(this.props.multiline == null || this.props.multiline == false) &&
                < input
                    className='form-control'
                    id={this.props.id}
                    type={inputType}
                    readOnly={this.props.readOnly}
                    pattern={pattern}
                    group
                    validate
                    value={this.props.value}
                    onChange={(event) =>{
                        if(this.props.onChangeText!=null)
                            this.props.onChangeText(event.target.value);
                    }} {...this.props}/>
                }
                {this.props.multiline != null && this.props.multiline &&
                <Editor
                    apiKey={'efk2g300fptq9ram563eyvv8lod8xvofyvdhbzvjtdl7qiwj'}
                    className='form-control'
                    id={this.props.id}
                    readOnly={this.props.readOnly}
                    group
                    config={this.editorConfiguration}
                    initialValue={'در حال بارگذاری...'}
                    value={this.props.value}
                    onEditorChange={(content, editor)=>{
                        if(this.props.onChangeText!=null)
                            this.props.onChangeText(content);
                    }}
                />
                }
            </div>
        );
    }
}

