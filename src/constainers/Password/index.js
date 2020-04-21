import React from 'react';
import { connect } from 'react-redux';
import { PasswordStyle } from './style';
import Header from '../../component/Header';
import { updatePasswod } from '../../redux/modules/password'
import Body from './component/Body'

function Password(props){
    const {
        history:{goBack},
        updatePassword
     } = props;
    return (
        <PasswordStyle>
            <Header 
             title = '修改密码'
             backBtn = '返回'
             backHandle={goBack}
            />
            <Body 
            updatePassword = { updatePassword }
            />
        </PasswordStyle>
    );
}

const mapDispatchToProps = dispatch =>({
    updatePassword:(password,oldPassword)=>dispatch(updatePasswod(password,oldPassword))
})

export default connect(
    null,mapDispatchToProps
)(Password);