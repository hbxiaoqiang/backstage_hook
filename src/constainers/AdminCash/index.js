import React, { useCallback,useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminCashStyle } from './style';
import Header from '../../component/Header';
import Body from './componet/Body';
import { getDatas,getLoadMore,actions } from '../../redux/modules/adminCash';
import useListenerScoll from '../../ownHook/useListenerScoll';

let param = {
}
function AdminCash(props) {
    const { 
    actions:{getPageList,clearData,updateStatus},
    history,
    datas ,
    loadMore} = props;

    const requestDatas = useCallback(() => {
        if(loadMore){
            Object.assign(param, { page: ++param.page })
            getPageList(param);
        }
    },[loadMore,getPageList])

    useEffect(()=>{
        Object.assign(param,{
            page: 0,
            size: 40,
            status:1,
            type:3
        })
    },[])

    useListenerScoll(requestDatas,clearData)
    
    return (
        <AdminCashStyle>
             <Header 
             title = '提现审批'
             backBtn = '返回'
             backHandle={history.goBack}
            />
            <Body 
            datas = {datas}
            updateFn={ updateStatus }
            />
        </AdminCashStyle>
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
)(AdminCash);