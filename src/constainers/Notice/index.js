import React from 'react';
import { connect } from 'react-redux';
import { NoticeStyle } from './style';
import Header from '../../component/Header';
import TextAreaFrom from './component/textArea';
import { actions } from '../../redux/modules/notice';

function Notice(props){
    return (
        <NoticeStyle>
           <Header 
           title= '编辑公告'
           backHandle={props.history.goBack}
           />
           <TextAreaFrom 
           postData={ props.upDateNotice }
           />
        </NoticeStyle>
    );
}

const mapDispatchToProps = dispatch => ({
    upDateNotice:content=>dispatch(actions.upDateNotice(content))
})

export default connect(null,mapDispatchToProps)(Notice);