import React, { useCallback,useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog } from 'react-weui';
import { actions as playersActions, types as playersTypes, selecter } from '../../redux/modules/players';
import Header from '../../component/Header';
import { PlayerStyle } from './style';
import LineTitle from '../../component/LineTit';
import Search from '../../component/Search';
import Content from './component/content';
import Fortune from './component/fortune';
import Spread from './component/spread';
import StatusCtr from './component/statusCtr';
import TypeSelect from './component/typeSelect';
import { withUrlParam } from '../../until/tools';
import useListenerScoll from '../../ownHook/useListenerScoll'; 


let param = {
}

function Player(props){
    const {
        history,
        location,
        players,
        total,
        fortune,
        status,
        spread,
        tip,
        typeIdSelect,
        loadMore,
        curUserId,
        playersActions
    } = props;

    const openTypeIdSelect = useCallback(() => {
        playersActions.openOther(true, playersTypes.PLAYERS_TYPEIDSELCET)
    },[playersActions])

    const closeTypeIdSelect = () => {
        playersActions.openOther(false, playersTypes.PLAYERS_TYPEIDSELCET)
    }

    const requestTypeIdData = (typeId) => {
        Object.assign(param, { page: 0, typeId })
        requestUserList()
    }

    const searchHanlde = (value) => {
        Object.assign(param, { seachName: value, page: 0 });
        requestUserList();
    }

    const requestUserList = useCallback(() => {
        if (loadMore) {
            Object.assign(param, { page: ++param.page })
            let obj = {};
            obj.page = param.page;
            obj.size = param.size;
            obj.seachName = param.seachName;
            if (param.sd && param.ed) {
                obj.sd = param.sd;
                obj.ed = param.ed
            }
            if (param.typeId) {
                obj.typeId = param.typeId
            }
            if (param.fPlayer) {
                obj.fPlayer = param.fPlayer
            }
            if(param.page === 1){
                playersActions.userCount(obj);
            }
            playersActions.playerList(obj);
        }
    },[loadMore,playersActions])

    const openEidtFortune = (userId) => {
        playersActions.openEidt(userId, playersTypes.PLAYERS_EDIT_FORTUNE)
    }

    const closeEidtFortune = () => {
        playersActions.openEidt(null, playersTypes.PLAYERS_EDIT_FORTUNE)
    }

    const openEidtStatus = (userId) => {
        playersActions.openEidt(userId, playersTypes.PLAYERS_EDIT_STATUS)
    }

    const closeEidtStatus = () => {
        playersActions.openEidt(null, playersTypes.PLAYERS_EDIT_STATUS)
    }

    const openEidtSpread = (userId) => {
        playersActions.openEidt(userId, playersTypes.PLAYERS_EDIT_SPREAD)
    }

    const closeEidtSpread = () => {
        playersActions.openEidt(null, playersTypes.PLAYERS_EDIT_SPREAD)
    }

    const fortuneValue = (fortune) => {
        playersActions.userUpdateFortune(curUserId, fortune)
    }

    const spreadUserId = (id) => {
        playersActions.userUpdateSpreadId(curUserId, id)
    }

    const delPlayer = () => {
        playersActions.userDelete(curUserId)
    }

    useEffect(()=>{
        let sd = null, ed = null;
        let seachParam = withUrlParam(location.search);
        if(seachParam&&seachParam.sd){
            sd = seachParam.sd+'T00:00:00';
            ed = seachParam.ed+'T23:59:59';
        }
        Object.assign(param,{
            page: 0,
            size: 10,
            seachName: '',
            sd: sd,
            ed: ed,
            typeId: null,
            fPlayer: false
        })
    },[location])

    useListenerScoll(requestUserList,playersActions.clearData)

    return (
        <PlayerStyle>
            <Header
                title='玩家'
                backBtn='返回'
                backHandle={history.goBack}
                otherBtn='切换身份'
                otherHandle={openTypeIdSelect}
            />
            <LineTitle titleTxt={`总人数：${total}`} />
            <Search
                onSubmit={searchHanlde}
            />
            <Content
                items={players}
                eidtFortune={openEidtFortune}
                deleteUser={openEidtStatus}
                eidtSpread={openEidtSpread}
            />
            {
                fortune ?
                    <Fortune
                        cancelFn={fortuneValue}
                        sureFn={fortuneValue}
                        close={closeEidtFortune}
                    />
                    :
                    null
            }
            {
                spread ?
                    <Spread
                        sure={spreadUserId}
                        close={closeEidtSpread}
                    />
                    :
                    null
            }
            {
                status ?
                    <StatusCtr
                        cancel={closeEidtStatus}
                        sureFn={delPlayer}
                        id = {curUserId}
                        tip = '删除！'
                    />
                    :
                    null
            }
            {
                typeIdSelect ?
                    <TypeSelect
                        show={typeIdSelect}
                        requsetData={requestTypeIdData}
                        close={closeTypeIdSelect}
                    /> :
                    null
            }


            {
                !!tip ?
                    <Dialog type='ios' title='提示' buttons={[
                        {
                            label: '确定',
                            onClick: () => {
                                playersActions.openOther('', playersTypes.PLAYERS_TIP)
                            }
                        }
                    ]} show={true}>
                        {tip}
                    </Dialog>
                    : null
            }

        </PlayerStyle>

    )
}

const mapStateToProps = state => ({
    players: selecter.getPlayers(state),
    total: selecter.getTotal(state),
    fortune: selecter.getFortune(state),
    status: selecter.getStatus(state),
    spread: selecter.getSpread(state),
    tip: selecter.getTip(state),
    typeIdSelect: selecter.getTypeIdSelect(state),
    loadMore: selecter.getLoadMore(state),
    curUserId: selecter.getCurUserId(state)
})

const mapDispatchToProps = dispatch => ({
    playersActions: bindActionCreators(playersActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);


