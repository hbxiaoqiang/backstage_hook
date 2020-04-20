import React, { Component } from 'react';
import { SpreadStyle } from './style'
import { MaskStyle } from '../../../../component/CommonStyle';
import { Form, FormCell, CellHeader, CellBody, Input, CellFooter, Button } from 'react-weui';

export default class Spread extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    render() {
        return (
            <SpreadStyle>
                <MaskStyle onClick={this.close}></MaskStyle>
                <div className='content'>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                归属人ID：
                        </CellHeader>
                            <CellBody>
                                <Input type='number'
                                 value={this.state.value} 
                                 onChange={this.changeHandle}
                                 placeholder='填写ID' />
                            </CellBody>
                            <CellFooter>
                                <Button type="vcode" onClick={this.sureHandle}>
                                    确定
                            </Button>
                            </CellFooter>
                        </FormCell>
                    </Form>
                </div>
            </SpreadStyle>
        )
    }

    changeHandle = (e)=>{
        const value = e.target.value;
        this.setState((prev)=>({
            value
        }))
    }

    sureHandle = ()=>{
        if(this.state.value === '') return;
        this.props.sure(this.state.value);
    }

    close = () => {
        this.props.close();
    }
}