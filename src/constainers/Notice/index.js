import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NoticeStyle } from './style';
import Header from '../../component/Header';
import TextAreaFrom from './component/textArea';
import { actions } from '../../redux/modules/notice';

class Notice extends Component {
    render() {
        return (
            <NoticeStyle>
               <Header 
               title= '编辑公告'
               backHandle={this.props.history.goBack}
               />
               <TextAreaFrom 
               postData={ this.props.upDateNotice }
               />
            </NoticeStyle>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    upDateNotice:content=>dispatch(actions.upDateNotice(content))
})

export default connect(null,mapDispatchToProps)(Notice);