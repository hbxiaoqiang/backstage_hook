import React, { useState,useCallback } from 'react';
import { Form as WeuiForm, FormCell, CellHeader, CellFooter, Label, CellBody, Input, ButtonArea, Button, Dialog } from 'react-weui';
import { FormStyle } from './style';

function Form(props){
    const [getUserId,setUserId] = useState('');
    const [getGoldNum,setGoldNum] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const { giveGold,checkUserInfo } = props;

    const userIdHandle = useCallback((e) => {
        const value = e.target.value;
        setUserId(value)
    },[])

    const goldHandle = useCallback((e) => {
        const value = e.target.value;
        setGoldNum(value)
    },[])

    const clickHandle = useCallback(() => {
        getUserId && getGoldNum ?
            giveGold(getUserId, getGoldNum) :
            setErrMsg('用户ID和赠送数量必须填写')
    },[getUserId,getGoldNum,giveGold,setErrMsg])

    const alertClick = useCallback(() => {
        setErrMsg('')
    },[setErrMsg])

    const getUserInfo = useCallback(() => {
        getUserId ? checkUserInfo(getUserId) :
            setErrMsg('请输入用户ID')
    },[getUserId,setErrMsg,checkUserInfo])

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
                            onChange={userIdHandle}
                        />
                    </CellBody>
                    <CellFooter>
                        <Button onClick={getUserInfo} type="vcode">核对用户</Button>
                    </CellFooter>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>赠送数量</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type='number'
                            value={getGoldNum}
                            onChange={goldHandle}
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