import React, { Component,Fragment } from 'react';
import { Button, ButtonArea,Form,FormCell,CellBody,TextArea } from 'react-weui';

class TextAreaPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:''
        }
    }
    
    render() {
        return (
            <Fragment>
                 <Form>
                <FormCell>
                    <CellBody>
                        <TextArea
                        value={this.state.value}
                        onChange={this.changeHandle}
                        placeholder="请输入内容" rows="3" maxLength={200}></TextArea>
                    </CellBody>
                </FormCell>
            </Form>
            <ButtonArea>
                <Button
                onClick={ this.clickHandle }
                type="default">提交</Button>
            </ButtonArea>
            </Fragment>
        );
    }

    changeHandle = e => {
        const value = e.target.value;
        this.setState(()=>({
            value
        }))
    }

    clickHandle = () => {
        this.props.postData(this.state.value);
    }
}

export default TextAreaPost;