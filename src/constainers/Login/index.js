import React from "react";
import { Form,FormCell,CellHeader,Label,CellBody,Input,ButtonArea ,Button,Dialog } from 'react-weui';
import { Page } from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as loginActions, getUserName, getPassWord, getTipInfo } from '../../redux/modules/login';
import { getUserInfo } from '../../redux/modules/app'
import { Redirect } from 'react-router-dom';

function Login(props){
    const {
        userName,
        passWord,
        tipInfo,
        loginActions,
        userInfo
    } =props;


    const handleUserName=(e)=>{
        loginActions.inputUserName(e.target.value);
    }

    const handlePassWord=(e)=>{
        loginActions.inputPassWord(e.target.value);
    }

    const submit=()=>{
        loginActions.submitData()
    }

    if(userInfo.UserName){
        return (
            <Redirect to='/home' />
        )
    }
    return (
        <>
        <Page>
            <div className="page__hd">
                <h1 className="page__title">登陆后台</h1>
                <p className="page__desc">非管理员账号不可登陆</p>
            </div>
            <div className="page_bd">
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>账号</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" value={userName}
                             onChange={handleUserName} placeholder="请输入账号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" value={passWord}
                            onChange={handlePassWord} placeholder="请输入密码"/>
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button href="#!" onClick={ submit }>登录</Button>
                </ButtonArea>
            </div>
        </Page>
        {
            tipInfo?(
                <Dialog type='ios' title='提示' buttons={[
                    {
                        label: '确定',
                        onClick: loginActions.clearTip
                    }
                ]} show={true}>
                    {tipInfo}
                </Dialog>
            ):null
        }
        </>
    )
}

const mapStateToProps= (state,props)=>({
    userName:getUserName(state),
    passWord:getPassWord(state),
    tipInfo:getTipInfo(state),
    userInfo:getUserInfo(state)
})

const mapDispatchToProps = (dispatch) => ({
    loginActions:bindActionCreators(loginActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);