import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RecordCostStyle } from './style';
import Header from '../../component/Header';
import TotalList from './component/TotalList';
import GiveList from './component/GiveList';
import { selector,actions } from '../../redux/modules/recordCost'
import { getDateStr } from '../../until/tools';
import LineTit from '../../component/LineTit';

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

class RecordCost extends Component {
    render() {
        const type = this.props.match.params.type
        return (
            <RecordCostStyle>
                <Header 
                 title = {`${titleName[type]}记录`}
                 backHandle={this.props.history.goBack}
                />
                {
                    this.props.dates.startTime?
                   (
                    <LineTit 
                    titleTxt = { this.props.dates.startTime + '至' + this.props.dates.endTime }
                    />
                   ):null
                }
                {
                    type === 'record'?
                    (
                        <TotalList 
                        datas={ this.props.datas }
                        />
                    ):null
                }
                {
                    type === 'give'||type === 'recharge'?
                    (
                        <GiveList 
                        datas={ this.props.datas }
                        />
                    ):null
                }
                
            </RecordCostStyle>
        );
    }


    componentDidMount(){
        Object.assign(param,backParam(this.props.match.params.type))
        this.requestDatas();
        window.addEventListener('scroll', this.loadMoreEvent);
    }

    componentWillUnmount() {
        this.props.actions.clearData();    
        window.removeEventListener('scroll', this.loadMoreEvent);
    }

    requestDatas = () => {
        if(this.props.loadMore){
            Object.assign(param, { page: ++param.page })
            this.props.actions.pagedList(param);
        }
    }

    loadMoreEvent = () => {
        if (document.documentElement.scrollTop + 50 >=
            document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            this.requestDatas()
        }
    }

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