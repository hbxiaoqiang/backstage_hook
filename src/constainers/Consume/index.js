import React, { useMemo,useEffect,useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConsumeStyle } from './style';
import Header from '../../component/Header';
import LineTit from '../../component/LineTit';
import Body from './component/List';
import { selector,actions } from '../../redux/modules/consume';
import { withUrlParam,getDateStr } from '../../until/tools';
import useListenerScoll from '../../ownHook/useListenerScoll';

let param = {
}


function Consume(props){
    const {
        history:{goBack},
        location:{search},
        scdt,
        ecdt,
        datas,
        loadMore,
        actions:{getPageList, clearData}
    } = props;

    
    
    const backDateStr = useMemo(()=>{
        return scdt + '至' + ecdt
    },[scdt,ecdt])


    const requestList = useCallback(() => {
        if (loadMore) {
            Object.assign(param, { page: ++param.page })
            getPageList(param);
        }
    },[loadMore,getPageList])

    useEffect(()=>{
        let scdt = "2018-06-01", ecdt = getDateStr.CurDate(),
        userId=-1,isPartner=null;
        let seachParam = withUrlParam(search);
        if(seachParam&&seachParam.scdt){
            scdt = seachParam.sd+'T00:00:00';
            ecdt = seachParam.ed+'T23:59:59';
        }
        if(seachParam&&seachParam.userId){
            userId=seachParam.userId
        }
        Object.assign(param,{
            page: 0,
            size: 40,
            scdt,
            ecdt,
            userId,
            isPartner
        })
    },[search])

    useListenerScoll(requestList,clearData)

    return (
        <ConsumeStyle>
             <Header 
             title = '充值记录'
             backHandle={goBack}
            />
            <LineTit 
                titleTxt = { backDateStr }
            />
            <Body 
            datas={ datas }
            />
        </ConsumeStyle>
    );
}

const mapStateToProps = state =>{
    const { getList,getScdt,getEcdt,getLoadmore } = selector;
    return {
        datas:getList(state),
        scdt:getScdt(state),
        ecdt:getEcdt(state),
        loadMore:getLoadmore(state)
    }
}
const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Consume);