import React, { useState } from 'react';
import { Form as WeuiForm, FormCell, CellHeader, CellFooter, Label, CellBody, Input, ButtonArea, Button, Dialog } from 'react-weui';
import { FormStyle } from './style';

function Form (props) {
    const [ getUserId,setUserId ] = useState('');
    const [ getMobile,setMobile ] = useState('');
    const [ errMsg, setErrMsg ] = useState('');
    const { bindMobile,checkUserInfo } = props;

    const userIdHandle = (e) => {
        const value = e.target.value;
        setUserId(value)
    }

    const bindHandle = (e) => {
        const value = e.target.value;
        setMobile(value)
    }

    const clickHandle = () => {
        getUserId && getMobile ?
            bindMobile(getUserId, getMobile) :
            setErrMsg('用户ID和赠送数量必须填写')
    }

    const alertClick = () => {
        setErrMsg('')
    }

    const getUserInfo = () => {
        getUserId ? checkUserInfo(getUserId) :
            setErrMsg('请输入用户ID')
    }

    return (
        <FormStyle>
            <WeuiForm>
                <FormCell>
                    <CellHeader>
                        <Label>玩家Id</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type='text'
                            value={getUserId}
                            onChange={ userIdHandle }
                        />
                    </CellBody>
                    <CellFooter>
                        <Button onClick={getUserInfo} type="vcode">核对用户</Button>
                    </CellFooter>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>玩家手机</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type='number'
                            value={getMobile}
                            onChange={bindHandle}
                        />
                    </CellBody>
                </FormCell>
            </WeuiForm>
            <ButtonArea>
                <Button onClick={clickHandle}>确定</Button>
            </ButtonArea>

            {
                errMsg ? (
                    <Dialog type='ios' title='提示' buttons={[
                        {
                            label: '确定',
                            onClick: alertClick
                        }
                    ]} show={true}>
                        {errMsg}
                    </Dialog>
                ) : null
            }
        </FormStyle>
    )
}


export default Form;