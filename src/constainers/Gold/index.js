import React , { useEffect,useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/Header';
import GoldHeader from './component/Header';
import Tab from './component/Tab';
import From from './component/Form';
import CheckPup from '../../component/CheckPup';
import { selecter,actions } from '../../redux/modules/gold';
import { getUserInfo,actions as appAction } from '../../redux/modules/app';
import config from '../../config';
import { GoldStyle } from './style'

function Gold(props){
    const {
        history:{goBack},
        gold,
        actions:{giving,getUserInfo,closeChcekPup},
        playerInfo:{NickName,UserId,Gold},
        fristOrDefaul
    } = props;

    useEffect(()=>{
        fristOrDefaul()
    },[fristOrDefaul]);

    const backHeadImg = useMemo(()=>{
        return config.serverIp+config.imgPath+UserId+".jpg";
    },[UserId])

    return (
        <GoldStyle>
            <Header 
            title = '房卡'
            backBtn = '返回'
            backHandle={goBack}
            />
            <GoldHeader 
            gold = { gold }
            />
            <Tab />
            <From 
            giveGold = { giving }
            checkUserInfo = { getUserInfo }
            />

            {
                NickName?
                <CheckPup 
                headimg={backHeadImg}
                nickname={NickName}
                gold={ Gold }
                close = { closeChcekPup }
                />:
                null
            }
        </GoldStyle>
    )
}

const mapStateToProps = state => ({
    gold:getUserInfo(state).Gold,
    playerInfo:selecter.getPlayerInfo(state)
});

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(actions,dispatch),
    fristOrDefaul:bindActionCreators(appAction.fristOrDefaul,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Gold);