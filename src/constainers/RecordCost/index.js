import React, { useCallback,useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RecordCostStyle } from './style';
import Header from '../../component/Header';
import TotalList from './component/TotalList';
import GiveList from './component/GiveList';
import { selector,actions } from '../../redux/modules/recordCost'
import { getDateStr } from '../../until/tools';
import LineTit from '../../component/LineTit';
import useListenerScoll from '../../ownHook/useListenerScoll';

const param ={}
const titleName = {
    record:'房卡',
    give:'房卡赠送',
    recharge:'房卡充值'
}

const backParam = (type,sdt=getDateStr.getMothOnDay(),edt=getDateStr.CurDate()) => {
    switch(type){
        case 'record':
            return {
                PropIds:'1,2,3,45,50,55,91,93,95',
                unit:1,
                size: 20,
                page: 0,
            }
            case 'give':
            return {
                PropIds:'2',
                fromId:'',
                sdt:sdt+ "T00:00:00",
                edt:edt+ "T23:59:00",
                size: 20,
                page: 0,
            }
            case 'recharge':
            return {
                PropIds:'1',
                fromId:'',
                sdt:sdt+ "T00:00:00",
                edt:edt+ "T23:59:00",
                size: 20,
                page: 0,
            }
        default:
            return {}
    }
}

function RecordCost(props){
    const {
        history,
        dates,
        datas,
        loadMore,
        match,
        actions,
    }=props;

    const type = match.params.type;

    const requestDatas = useCallback(() => {
        if(loadMore){
            Object.assign(param, { page: ++param.page })
            actions.pagedList(param);
        }
    },[loadMore,actions]);


    useEffect(()=>{
        Object.assign(param,backParam(match.params.type))
    })

    useListenerScoll(requestDatas,actions.clearData)

    return (
        <RecordCostStyle>
            <Header 
             title = {`${titleName[type]}记录`}
             backHandle={history.goBack}
            />
            {
                dates.startTime?
               (
                <LineTit 
                titleTxt = { dates.startTime + '至' + dates.endTime }
                />
               ):null
            }
            {
                type === 'record'?
                (
                    <TotalList 
                    datas={ datas }
                    />
                ):null
            }
            {
                type === 'give'||type === 'recharge'?
                (
                    <GiveList 
                    datas={ datas }
                    />
                ):null
            }
            
        </RecordCostStyle>
    );
}

const mapStateToProps = state => ({
    datas : selector.getDatas(state),
    loadMore:selector.getLoadMore(state),
    dates:selector.getDates(state)
});

const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(RecordCost);