import React, { useEffect,useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getTotalData, getDateTimer, getGameRecords, getDiyTime,
    actions as countActions
} from '../../../redux/modules/count';
import Header from '../../../component/Header';
import DateTab from '../../../component/DateTab';
import DateSelect from '../../../component/DateSelect';
import TotalCount from './component/totalCount';
import GameCount from './component/gameCout';
import LineTit from '../../../component/LineTit';
import { dateTxt } from '../../../until/tools';
import { CountStyle } from './style';

import { withRouter } from 'react-router-dom';

function Count(props){
    const { diyTime, countActions,history,
        dateTimes: { startTime, endTime },
        gameRecords, totalData
    } = props;

    useEffect(()=>{
        countActions.userSta(startTime, endTime)
    },[countActions,startTime,endTime])

    const goToPlayers = useCallback(() => {
        history.push(`/player?sd=${startTime}&ed=${endTime}`)
    },[history,startTime,endTime])

    return (
        <CountStyle>
            <Header title='我的统计' />
            <DateTab
                getData={countActions.userSta}
                diy={countActions.diyTime}
            />
            <DateSelect
                active={diyTime}
                getData={countActions.userSta}
            />
            <LineTit titleTxt={
                dateTxt(startTime, endTime)
            } />
            <TotalCount
                register={totalData.registCount}
                totalCount={totalData.totalCount}
                goToPlayers = { goToPlayers }
            />
            <GameCount
                records={gameRecords}
            />
        </CountStyle>

    )

}

const mapStateToProps = (state) => ({
    totalData: getTotalData(state),
    dateTimes: getDateTimer(state),
    gameRecords: getGameRecords(state),
    diyTime: getDiyTime(state),
})

const mapDispatchToProps = (dispatch) => ({
    countActions: bindActionCreators(countActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Count));