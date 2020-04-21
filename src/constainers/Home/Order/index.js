import React, { useMemo,useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../../component/Header';
import DateTab from '../../../component/DateTab';
import DateSelect from '../../../component/DateSelect';
import LineTit from '../../../component/LineTit';
import TotalCount from './componet/totalCount';
import CountList from './componet/countList';
import { OrderStyle } from './style';
import { dateTxt } from '../../../until/tools';
import {
    actions as orderActions, getTotalData, getDateTimer,
    getRecords, getDiyTime
} from '../../../redux/modules/order';

function Order(props){
    const { orderActions: { statistics, diyTime }, diy,
            date: { startTime, endTime },
            totalData: { fangkaCost, playerRech },
            records
        } = props;
    
    const lineTit = useMemo(()=>{
        return dateTxt(startTime, endTime)
    },[startTime,endTime])

    useEffect(()=>{
        statistics(startTime, endTime)
    },[startTime,endTime,statistics])

    return (
        <OrderStyle>
            <Header title='充值统计' />
            <DateTab
                getData={statistics}
                diy={diyTime}
            />
            <DateSelect
                active={diy}
                getData={statistics}
            />
            <LineTit
                titleTxt={lineTit}
            />
            <TotalCount
                fangkaCost={fangkaCost}
                playerRech={playerRech}
            />
            <CountList
                counts={records}
            />
        </OrderStyle>
    )
}

const mapStateToProps = state => ({
    totalData: getTotalData(state),
    date: getDateTimer(state),
    records: getRecords(state),
    diy: getDiyTime(state)

})

const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);