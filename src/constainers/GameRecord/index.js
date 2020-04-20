import React from 'react';
import { connect } from 'react-redux';
import { GameRecordStyle } from './style';
import Header from '../../component/Header';

function GameRecord(props) {
    return (
        <GameRecordStyle>
             <Header 
             title = '游戏记录'
             backBtn = '返回'
             backHandle={props.history.goBack}
            />
        </GameRecordStyle>
    );
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(GameRecord);