import React , { useMemo,useCallback,useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo, actions as appActions } from '../../../redux/modules/app';
import config from '../../../config';
import Header from './component/header';
import LineTitle from '../../../component/LineTit';
import Program from './component/program';
import { HallStyle } from './style';

function Hall(props) {
    const {
        userInfo,
        history,
        onExit,
        getFristOrDefaul
    } = props;

    const headImg = useMemo(()=>{
        return config.serverIp+config.imgPath+userInfo.UserId+".jpg"
    },[userInfo])

    const appName = useMemo(()=>{
        return config.appName[config.partnerId];
    },[])

    const onExitCall = useCallback(()=>{
        onExit();
        history.push('/');
    },[onExit,history])

    useEffect(()=>{
        getFristOrDefaul()
    },[getFristOrDefaul]);

    return (
        <HallStyle className='Home'>
            {
                userInfo.UserId?(
                    <Header 
                        appName={appName}
                        exitLogin={ onExitCall }
                        imgUrl={
                            headImg
                        }
                        nickName={userInfo.NickName}
                        typeName={config.userTypeName[userInfo.TypeId]}
                    />
                ):null
            }
            <LineTitle titleTxt='类目'/>
            <Program typeId={userInfo.TypeId} />
        </HallStyle>
    )
}

const mapStateToProps=(state)=>({
    userInfo:getUserInfo(state)
})

const mapDispatchToProps=(dispatch)=>({
    getFristOrDefaul:bindActionCreators(appActions.fristOrDefaul,dispatch),
    onExit:bindActionCreators(appActions.exitLogin,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Hall);