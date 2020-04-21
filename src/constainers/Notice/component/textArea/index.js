import React, { useState,Fragment } from 'react';
import { Button, ButtonArea,Form,FormCell,CellBody,TextArea } from 'react-weui';

function TextAreaPost(props){
    const [value,setValue] = useState('');
    
    const changeHandle = e => {
        setValue(e.target.value)
    }

    const clickHandle = () => {
        this.props.postData(value);
    }

    return (
        <Fragment>
             <Form>
            <FormCell>
                <CellBody>
                    <TextArea
                    value={value}
                    onChange={changeHandle}
                    placeholder="请输入内容" rows="3" maxLength={200}></TextArea>
                </CellBody>
            </FormCell>
        </Form>
        <ButtonArea>
            <Button
            onClick={ clickHandle }
            type="default">提交</Button>
        </ButtonArea>
        </Fragment>
    );
}

export default TextAreaPost;