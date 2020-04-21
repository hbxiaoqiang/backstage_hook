import React, { useState } from 'react';
import { SpreadStyle } from './style'
import { MaskStyle } from '../../../../component/CommonStyle';
import { Form, FormCell, CellHeader, CellBody, Input, CellFooter, Button } from 'react-weui';

function Spread(props){
    const [value,setValue] =useState('');
    const changeHandle = (e)=>{
        setValue(e.target.value)
    }

    const sureHandle = ()=>{
        if(value === '') return;
        props.sure(this.state.value);
    }

    const close = () => {
        props.close();
    }

    return (
        <SpreadStyle>
            <MaskStyle onClick={close}></MaskStyle>
            <div className='content'>
                <Form>
                    <FormCell>
                        <CellHeader>
                            归属人ID：
                    </CellHeader>
                        <CellBody>
                            <Input type='number'
                             value={value} 
                             onChange={changeHandle}
                             placeholder='填写ID' />
                        </CellBody>
                        <CellFooter>
                            <Button type="vcode" onClick={sureHandle}>
                                确定
                        </Button>
                        </CellFooter>
                    </FormCell>
                </Form>
            </div>
        </SpreadStyle>
    )
}

export default Spread