import React, { Component } from 'react';
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
class Order extends Component {
    render() {
        const { orderActions: { statistics, diyTime }, diy,
            date: { startTime, endTime },
            totalData: { fangkaCost, playerRech },
            records
        } = this.props;
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
                    titleTxt={dateTxt(startTime, endTime)}
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

    componentDidMount() {
        const { orderActions: { statistics },
            date: { startTime, endTime }
        } = this.props
        statistics(startTime, endTime)
    }
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