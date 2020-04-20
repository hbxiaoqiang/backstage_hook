import React from 'react';
import { connect } from 'react-redux';
import { GameDetailStyle } from './style';
import Header from '../../component/Header';

function GameDetail(props) {
    return (
        <GameDetailStyle>
            <Header 
            title = '游戏详情'
            backBtn = '返回'
            backHandle={props.history.goBack}
            />
        </GameDetailStyle>
    );
}

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({})

export default connect(
    mapStateToProps,mapDispatchToProps
)(GameDetail);