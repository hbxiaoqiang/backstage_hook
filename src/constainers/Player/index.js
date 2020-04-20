import React, { Component } from 'react';
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


let param = {
}

class Player extends Component {
    render() {
        return (
            <PlayerStyle>
                <Header
                    title='玩家'
                    backBtn='返回'
                    backHandle={this.props.history.goBack}
                    otherBtn='切换身份'
                    otherHandle={this.openTypeIdSelect}
                />
                <LineTitle titleTxt={`总人数：${this.props.total}`} />
                <Search
                    onSubmit={this.searchHanlde}
                />
                <Content
                    items={this.props.players}
                    eidtFortune={this.openEidtFortune}
                    deleteUser={this.openEidtStatus}
                    eidtSpread={this.openEidtSpread}
                />
                {
                    this.props.fortune ?
                        <Fortune
                            cancelFn={this.fortuneValue}
                            sureFn={this.fortuneValue}
                            close={this.closeEidtFortune}
                        />
                        :
                        null
                }
                {
                    this.props.spread ?
                        <Spread
                            sure={this.spreadUserId}
                            close={this.closeEidtSpread}
                        />
                        :
                        null
                }
                {
                    this.props.status ?
                        <StatusCtr
                            cancel={this.closeEidtStatus}
                            sureFn={this.delPlayer}
                            id = {this.props.curUserId}
                            tip = '删除！'
                        />
                        :
                        null
                }
                {
                    this.props.typeIdSelect ?
                        <TypeSelect
                            show={this.props.typeIdSelect}
                            requsetData={this.requestTypeIdData}
                            close={this.closeTypeIdSelect}
                        /> :
                        null
                }


                {
                    !!this.props.tip ?
                        <Dialog type='ios' title='提示' buttons={[
                            {
                                label: '确定',
                                onClick: () => {
                                    this.props.playersActions.openOther('', playersTypes.PLAYERS_TIP)
                                }
                            }
                        ]} show={true}>
                            {this.props.tip}
                        </Dialog>
                        : null
                }

            </PlayerStyle>

        )
    }

    componentDidMount() {
        let sd = null, ed = null;
        let seachParam = withUrlParam(this.props.location.search);
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
        
        this.requestUserList();
        window.addEventListener('scroll', this.loadMoreEvent);
    }

    componentWillUnmount() {
        this.props.playersActions.clearData();
        
        window.removeEventListener('scroll', this.loadMoreEvent);
    }

    openTypeIdSelect = () => {
        this.props.playersActions.openOther(true, playersTypes.PLAYERS_TYPEIDSELCET)
    }

    closeTypeIdSelect = () => {
        this.props.playersActions.openOther(false, playersTypes.PLAYERS_TYPEIDSELCET)
    }

    requestTypeIdData = (typeId) => {
        Object.assign(param, { page: 0, typeId })
        this.requestUserList()
    }

    searchHanlde = (value) => {
        Object.assign(param, { seachName: value, page: 0 });
        this.requestUserList();
    }

    requestUserList = () => {
        if (this.props.loadMore) {
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
                this.props.playersActions.userCount(obj);
            }
            this.props.playersActions.playerList(obj);
        }
    }

    loadMoreEvent = () => {
        if (document.documentElement.scrollTop + 50 >=
            document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            this.requestUserList()
        }
    }

    openEidtFortune = (userId) => {
        this.props.playersActions.openEidt(userId, playersTypes.PLAYERS_EDIT_FORTUNE)
    }

    closeEidtFortune = () => {
        this.props.playersActions.openEidt(null, playersTypes.PLAYERS_EDIT_FORTUNE)
    }

    openEidtStatus = (userId) => {
        this.props.playersActions.openEidt(userId, playersTypes.PLAYERS_EDIT_STATUS)
    }

    closeEidtStatus = () => {
        this.props.playersActions.openEidt(null, playersTypes.PLAYERS_EDIT_STATUS)
    }

    openEidtSpread = (userId) => {
        this.props.playersActions.openEidt(userId, playersTypes.PLAYERS_EDIT_SPREAD)
    }

    closeEidtSpread = () => {
        this.props.playersActions.openEidt(null, playersTypes.PLAYERS_EDIT_SPREAD)
    }

    fortuneValue = (fortune) => {
        this.props.playersActions.userUpdateFortune(this.props.curUserId, fortune)
    }

    spreadUserId = (id) => {
        this.props.playersActions.userUpdateSpreadId(this.props.curUserId, id)
    }

    delPlayer = () => {
        this.props.playersActions.userDelete(this.props.curUserId)
    }
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