import React, { Component } from "react";
import { Form,FormCell,CellHeader,Label,CellBody,Input,ButtonArea ,Button,Dialog } from 'react-weui';
import { Page } from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as loginActions, getUserName, getPassWord, getTipInfo } from '../../redux/modules/login';
import { getUserInfo } from '../../redux/modules/app'
import { Redirect } from 'react-router-dom';

class Login extends Component{
    render(){
        if(this.props.userInfo.UserName){
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
                                <Input type="text" value={this.props.userName}
                                 onChange={this.handleUserName} placeholder="请输入账号"/>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>密码</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="password" value={this.props.passWord}
                                onChange={this.handlePassWord} placeholder="请输入密码"/>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                        <Button href="#!" onClick={ this.submit }>登录</Button>
                    </ButtonArea>
                </div>
            </Page>
            {
                this.props.tipInfo?(
                    <Dialog type='ios' title='提示' buttons={[
                        {
                            label: '确定',
                            onClick: this.props.loginActions.clearTip
                        }
                    ]} show={true}>
                        {this.props.tipInfo}
                    </Dialog>
                ):null
            }
            </>
        )
    }

    handleUserName=(e)=>{
        this.props.loginActions.inputUserName(e.target.value);
    }

    handlePassWord=(e)=>{
        this.props.loginActions.inputPassWord(e.target.value);
    }

    submit=()=>{
        this.props.loginActions.submitData()
    }
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