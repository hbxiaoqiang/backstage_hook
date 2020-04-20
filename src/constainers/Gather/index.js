import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GatherStyle } from './style';
import { bindActionCreators } from 'redux';
import { getTotalData,getDateTimer,actions } from '../../redux/modules/gather';
import Header from '../../component/Header';
import LineTit from '../../component/LineTit';
import DateTab from '../../component/DateTab';
import DateSelect from '../../component/DateSelect';
import { dateTxt } from '../../until/tools';
import Body from './componts/body'

function Gather(props){
    const { 
        diyTime,
        history:{goBack},
        actions:{userBigSta,diyTime:setDiyTime},
        dateTimes: { startTime, endTime },
        totalData
    } = this.props;

    useEffect(()=>{
        userBigSta(startTime, endTime)
    },[startTime,endTime,userBigSta])

    return (
        <GatherStyle>
            <Header 
                title= '数据汇总'
                backHandle={goBack}
            />
             <DateTab
                getData={userBigSta}
                diy={setDiyTime}
            />
            <DateSelect
                active={diyTime}
                getData={userBigSta}
            />
            <LineTit titleTxt={
                dateTxt(startTime, endTime)
            } />
            <Body 
            totalData = { totalData }
            />
        </GatherStyle>
    );
}

const mapStateToProps = state =>({
    totalData: getTotalData(state),
    dateTimes:getDateTimer(state)
})
const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(actions,dispatch)
})

export default connect(
    mapStateToProps,mapDispatchToProps
)(Gather);