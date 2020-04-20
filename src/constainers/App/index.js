import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getCommon, actions as appActions } from '../../redux/modules/app';
import Login from '../Login';
import Home from '../Home';
import Player from '../Player';
import Gold from '../Gold';
import Notice from '../Notice';
import Group from '../Group';
import BindMobile from '../BindMobile';
import GameDetail from '../GameDetail';
import GameRecord from '../GameRecord';
import Gather from '../Gather';
import Packet from '../Packet';
import Password from '../Password';
import AdminCash from '../AdminCash';
import Consume from '../Consume';
import RecordCost from '../RecordCost';
import Loading from '../../component/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Toptips, Dialog } from 'react-weui';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PrivateRoute from '../PrivateRoute';
//import dynamicImport from '../../until/dynamicImport';


const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
}

const outRouter = props => {
    return <Fragment>
        <Route exact path='/' component={Login} />
        <TransitionGroup
            childFactory={child => React.cloneElement(
                child,
                { classNames: ANIMATION_MAP[props.history.action] }
            )}
        >
            <CSSTransition
                key={props.location.key}
                timeout={500}
            >
                <Switch location={props.location}>
                    <PrivateRoute path='/home' component={Home} />
                    <PrivateRoute path='/player' component={Player} />
                    <PrivateRoute path='/gold' component={Gold} />
                    <PrivateRoute path='/notice' component={Notice} />
                    <PrivateRoute path='/group' component={Group} />
                    <PrivateRoute path='/bindMobile' component={BindMobile} />
                    <PrivateRoute path='/gameDetail' component={GameDetail} />
                    <PrivateRoute path='/gameRecord' component={GameRecord} />
                    <PrivateRoute path='/gather' component={Gather} />
                    <PrivateRoute path='/packet' component={Packet} />
                    <PrivateRoute path='/password' component={Password} />
                    <PrivateRoute path='/adminCash' component={AdminCash} />
                    <PrivateRoute path='/consume/:type' component={Consume} />
                    <PrivateRoute path='/RecordCost/:type' component={RecordCost} />
                </Switch>

            </CSSTransition>
        </TransitionGroup>
    </Fragment>
}

const Alert = (tip, fn) => {
    return (<Dialog type="ios"
        title='提示'
        buttons={
            [
                {
                    label: '确定',
                    onClick: fn
                }
            ]
        }
        show={true}>
        {tip}
    </Dialog>)
}

const Confirm = (tip, sure, cancel) => {
    return (<Dialog type="ios"
        title='提示'
        buttons={
            [
                {
                    type: 'default',
                    label: '取消',
                    onClick: cancel
                },
                {
                    type: 'primary',
                    label: '确定',
                    onClick: sure
                },
            ]
        }
        show={true}>
        {tip}
    </Dialog>)
}

function App(props) {
    return (
         <Fragment>
            <BrowserRouter>
                <Route render={props => outRouter(props)}
                />
            </BrowserRouter>
            {
                props.common.loading ? (<Loading />) : null
            }
            {
                props.common.topTips ? (
                    <Toptips type="warn" show={true}>{props.common.topTips}</Toptips>
                ) : null
            }
            {
                props.common.alert ?
                    Alert(props.common.alert, props.clearAlert) : null
            }
            {
                props.common.confirm.tip ?
                    Confirm(props.common.confirm.tip,
                        props.common.confirm.sureCall,
                        props.clearConfirm) : null
            }

        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    common: getCommon(state)
})

const mapDispatchToProps = (dispatch) => ({
    clearTips: () => dispatch(appActions.clearTopTips()),
    clearAlert: () => dispatch(appActions.clearAlert()),
    clearConfirm: () => dispatch(appActions.clearConfirm())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);