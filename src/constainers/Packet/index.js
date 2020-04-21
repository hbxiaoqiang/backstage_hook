import React, { useCallback,useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PacketStyle } from './style';
import Header from '../../component/Header';
import Body from './component/Body';
import { getDatas,getLoadMore,actions  } from '../../redux/modules/adminCash'
import useListenerScoll from '../../ownHook/useListenerScoll'

let param = {
}

function Packet(props){
    const {
        datas,
        loadMore,
        actions,
        history
    } = props;

    const requestDatas = useCallback(() => {
        if(loadMore){
            Object.assign(param, { page: ++param.page })
            actions.getPageList(param);
        }
    },[loadMore,actions]);

    useEffect(()=>{
        Object.assign(param,{
            page: 0,
            size: 40,
            type:3
        })
    },[])

    useListenerScoll(requestDatas,actions.clearData)

    return (
        <PacketStyle>
             <Header 
             title = '提现记录'
             backBtn = '返回'
             backHandle={history.goBack}
            />
            <Body 
                datas = { datas }
            />
        </PacketStyle>
        
    );
}

const mapStateToProps = state => ({
    datas:getDatas(state),
    loadMore:getLoadMore(state)
});

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(actions,dispatch)
});

export default connect(
    mapStateToProps,mapDispatchToProps
)(Packet);