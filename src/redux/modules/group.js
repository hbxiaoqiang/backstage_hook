import { types as AppTypes } from './app';
import { getControl, updateControl } from '../../until/url';
import { jsonp } from '../../until/request';
import { JSONP_REQ } from '../middleware/api';

const initState = {
    groupId: '',
    days: '',
    winMult: '',
    loseMult: ''
}

export const types = {
    GROUP_GET_CONTROL: 'GROUP_GET_CONTROL',
    GROUP_GROUPID: 'GROUP_GROUPID',
    GROUP_DAYS: 'GROUP_DAYS',
    GROUP_WINMULT: 'GROUP_WINMULT',
    GROUP_LOSEMULT: 'GROUP_LOSEMULT'
}

export const actions = {
    changeGroupId: value => ({
        type: types.GROUP_GROUPID,
        value
    }),
    changeDays: value => ({
        type: types.GROUP_DAYS,
        value
    }),
    changeWinMult: value => ({
        type: types.GROUP_WINMULT,
        value
    }),
    changeLoseMult: value => ({
        type: types.GROUP_LOSEMULT,
        value
    }),
    searchGroup: () => (dispatch, getState) => {
        const url = getControl({
            userName: getState().app.userInfo.UserName,
            groupId:getState.group.groupId
        })

        dispatch(requestControl(url))
    },
    updateControl: () => (dispatch, getState) => {
        const { app: { userInfo: { UserName } },
            group: { groupId, days, winMult, loseMult } } = getState();
        const url = updateControl({
            UserName,
            groupId,
            days,
            winMult,
            loseMult
        })
        if (!groupId || !days || !winMult || !loseMult) {
            return dispatch({
                type: AppTypes.APP_ALERT,
                msg: '所有参数必须填写'
            })
        }
        jsonp(url).then(data => dispatch({
            type: AppTypes.APP_ALERT,
            msg: '修改成功'
        })
        ).catch(err => dispatch({
            type: AppTypes.APP_ALERT,
            msg: err
        }))
    }
}

const requestControl = url => ({
    [JSONP_REQ]: {
        types: [
            AppTypes.APP_LOADING,
            types.GROUP_GET_CONTROL,
            AppTypes.APP_TOP_TIPS
        ],
        api: url,
        tipAutoCancel: true
    }
})

export const selector = {
    getGoupId: state => state.group.groupId,
    days: state => state.group.days,
    winMult: state => state.group.winMult,
    loseMult: state => state.group.loseMult
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GROUP_GET_CONTROL:
            const days = action.data.Days || 0,
                winMult = action.data.WinMult || 0,
                loseMult = action.data.LoseMult || 0;
            return { ...state, days, winMult, loseMult }
        case types.GROUP_DAYS:
            return { ...state, days: action.value }
        case types.GROUP_WINMULT:
            return { ...state, winMult: action.value }
        case types.GROUP_LOSEMULT:
            return { ...state, loseMult: action.value }
        default:
            return state;
    }
}

export default reducer