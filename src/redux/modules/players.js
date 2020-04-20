
import { combineReducers } from 'redux'
import { types as AppTypes } from '../modules/app';
import { JSONP_REQ } from '../middleware/api';
import {
    user_List,
    user_Count,
    user_UpdateFortune,
    user_Delete,
    user_UpdateSpreadId
} from '../../until/url';
const initState = {
    listData: {
        // page: 0,
        // size: 8,
        // sd: null,
        // ed: null,
        // typeId: null,
        // spreadId: null,
        // fPlayer: null,
        // seachName: null,
        loadmore:true,
        ids: [],
        data: {}
    },
    total: 0,
    edit: {
        userId: null,
        fortune: false,
        status: false,
        spread: false
    },
    other: {
        typeIdSelect: false,
        tip: ''
    }

};

export const types = {
    PLAYERS_USER_LIST_RES: 'PLAYERS_USER_LIST_RES',
    PLAYERS_USER_LIST_SUCCESS: 'PLAYERS_USER_LIST_SUCCESS',
    PLAYERS_USER_LIST_FAIL: 'PLAYERS_USER_LIST_FAIL',

    PLAYERS_USER_COUNT_RES: 'PLAYERS_USER_COUNT_RES',
    PLAYERS_USER_COUNT_SUCCESS: 'PLAYERS_USER_COUNT_SUCCESS',
    PLAYERS_USER_COUNT_FAIL: 'PLAYERS_USER_COUNT_FAIL',

    PLAYERS_USER_UPDATEPREADID_RES: 'PLAYERS_USER_UPDATEPREADID_RES',
    PLAYERS_USER_UPDATEPREADID_SUCCESS: 'PLAYERS_USER_UPDATEPREADID_SUCCESS',
    PLAYERS_USER_UPDATEPREADID_FAIL: 'PLAYERS_USER_UPDATEPREADID_FAIL',

    PLAYERS_USER_UPDATEORTUNE_RES: 'PLAYERS_USER_UPDATEORTUNE_RES',
    PLAYERS_USER_UPDATEORTUNE_SUCCESS: 'PLAYERS_USER_UPDATEORTUNE_SUCCESS',
    PLAYERS_USER_UPDATEORTUNE_FAIL: 'PLAYERS_USER_UPDATEORTUNE_FAIL',

    PLAYERS_USER_DELETE_RES: 'PLAYERS_USER_DELETE_RES',
    PLAYERS_USER_DELETE_SUCCESS: 'PLAYERS_USER_DELETE_SUCCESS',
    PLAYERS_USER_DELETE_FAIL: 'PLAYERS_USER_DELETE_FAIL',

    PLAYERS_TYPEIDSELCET: 'PLAYERS_TYPEIDSELCET',
    PLAYERS_TIP: 'PLAYERS_TIP',

    PLAYERS_CLEAR_DATA: 'PLAYERS_CLEAR_DATA',

    PLAYERS_EDIT_FORTUNE: 'PLAYERS_EDIT_FORTUNE',
    PLAYERS_EDIT_STATUS: 'PLAYERS_EDIT_STATUS',
    PLAYERS_EDIT_SPREAD: 'PLAYERS_EDIT_SPREAD'

}

export const actions = {
    playerList: obj => {//obj{page,size,seachName,sd,ed,typeId,fPlayer}
        return (dispatch, getState) => {
            const { app: { userInfo } ,players:{ listData:{loadmore} }} = getState();
            if(!loadmore){
                return;
            }

            dispatch({
                type:types.PLAYERS_USER_LIST_RES
            })

            let data = {
                userName: userInfo.UserName,
                userId: userInfo.UserId,
                ...obj
            }
            const url = user_List(data);
            dispatch(backUserList(url,obj.page));
        }
    },

    userCount: ( obj = {} ) => {
        return (dispatch, getState) => {
            const { app: { userInfo } } = getState();
            const url = user_Count({
                userName: userInfo.UserName,
                userId: userInfo.UserId,
                ...obj
            })
            dispatch(backUserCount(url));

        }
    },

    userUpdateSpreadId: (userId, spreadId) => {
        return (dispatch, getState) => {
            const url = user_UpdateSpreadId({
                userName: getState().app.userInfo.UserName,
                userId,
                spreadId
            })
            dispatch(backUserUpdateSpreadId(url, { userId, spreadId }))
        }
    },

    userUpdateFortune: (userId, fortune) => {
        return (dispatch, getState) => {
            const url = user_UpdateFortune({
                userName: getState().app.userInfo.UserName,
                userId,
                fortune
            })
            dispatch(backUserUpdateFortune(url, { userId, fortune }))
        }
    },

    userDelete: userId => {
        return (dispatch, getState) => {
            const url = user_Delete({
                userName: getState().app.userInfo.UserName,
                userId
            })
            dispatch(backUserDelete(url, { userId }))
        }
    },

    openEidt: (userId, type) => {
        return (dispatch) => {
            dispatch({
                type,
                userId
            })
        }
    },

    openOther: (content, type) => {
        return (dispatch) => {
            dispatch({
                type,
                content
            })
        }
    },

    clearData: () => {
        return (dispatch) => {
            dispatch({
                type: types.PLAYERS_CLEAR_DATA
            })
        }
    }
}

export const selecter = {
    getPlayers:state => state.players.listData.ids.map(
        id => state.players.listData.data[id]),

    getTotal:state => state.players.total,

    getFortune:state => state.players.edit.fortune,

    getStatus:state => state.players.edit.status,

    getSpread:state =>  state.players.edit.spread,

    getTip:state =>  state.players.other.tip,

    getTypeIdSelect:state =>  state.players.other.typeIdSelect,

    getLoadMore: state => state.players.listData.loadmore,

    getCurUserId: state => state.players.edit.userId
}

const backUserList = (url,page) => ({
    [JSONP_REQ]: {
        types: [
            AppTypes.APP_LOADING,
            types.PLAYERS_USER_LIST_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api: url,
        tipAutoCancel: true,
        depth: true,
        otherData:page
    }
})

const backUserCount = url => ({
    [JSONP_REQ]: {
        types: [
            types.PLAYERS_USER_COUNT_RES,
            types.PLAYERS_USER_COUNT_SUCCESS,
            types.PLAYERS_USER_COUNT_FAIL
        ],
        api: url
    }
})

const backUserUpdateSpreadId = (url, otherData) => ({
    [JSONP_REQ]: {
        types: [
            types.PLAYERS_USER_UPDATEPREADID_RES,
            types.PLAYERS_USER_UPDATEPREADID_SUCCESS,
            types.PLAYERS_USER_UPDATEPREADID_FAIL
        ],
        api: url,
        otherData
    }
})

const backUserUpdateFortune = (url, otherData) => ({
    [JSONP_REQ]: {
        types: [
            types.PLAYERS_USER_UPDATEORTUNE_RES,
            types.PLAYERS_USER_UPDATEORTUNE_SUCCESS,
            types.PLAYERS_USER_UPDATEORTUNE_FAIL
        ],
        api: url,
        otherData
    }
})

const backUserDelete = (url, otherData) => ({
    [JSONP_REQ]: {
        types: [
            types.PLAYERS_USER_DELETE_RES,
            types.PLAYERS_USER_DELETE__SUCCESS,
            types.PLAYERS_USER_DELETE_FAIL
        ],
        api: url,
        otherData
    }
})

const listData = (state = initState.listData, action) => {
    switch (action.type) {
        case types.PLAYERS_USER_LIST_RES:
            return {...state,loadmore:false}
        case types.PLAYERS_USER_LIST_SUCCESS:
            if(action.data === null) return {...state, loadmore:true};
            if(action.otherData === 1){
                return { ...state, ...action.data,loadmore:true };
            }else{
                return {
                    ids:[...state.ids,...action.data.ids],
                    data:{...state.data,...action.data.data},
                    loadmore:true
                }
            }
        case types.PLAYERS_USER_UPDATEORTUNE_SUCCESS:
            {
                const { userId, fortune } = action.otherData;
                const item = { ...state.data[userId], Fortune: fortune };
                const data = { ...state.data, [userId]: item }
                return { ...state, data };
            }
        case types.PLAYERS_USER_DELETE_SUCCESS:
            {
                const { userId } = action.otherData;
                const ids = state.ids.filter(value => {
                    return value !== userId
                })
                return { ...state, ids }
            }
        case types.PLAYERS_CLEAR_DATA:
            return { ...initState.listData }
        default:
            return state;
    }
}

const total = (state = initState.total, action) => {
    switch (action.type) {
        case types.PLAYERS_USER_COUNT_SUCCESS:
            return action.data;
        case types.PLAYERS_CLEAR_DATA:
            return { ...state, total: initState.total }
        default:
            return state;
    }
}

const edit = (state = initState.edit, action) => {
    switch (action.type) {
        case types.PLAYERS_EDIT_FORTUNE:
            return { ...state, userId: action.userId, fortune: !!action.userId }
        case types.PLAYERS_EDIT_STATUS:
            return { ...state, userId: action.userId, status: !!action.userId }
        case types.PLAYERS_EDIT_SPREAD:
            return { ...state, userId: action.userId, spread: !!action.userId }
        case types.PLAYERS_CLEAR_DATA:
            return { ...state, ...initState.edit }
        default:
            return state;
    }
}

const other = (state = initState.other, action) => {
    switch (action.type) {
        case types.PLAYERS_TYPEIDSELCET:
            return { ...state, typeIdSelect: action.content };
        case types.PLAYERS_TIP:
            return { ...state, tip: action.tip };
        case types.PLAYERS_USER_UPDATEPREADID_SUCCESS ||
            types.PLAYERS_USER_UPDATEORTUNE_SUCCESS ||
            types.PLAYERS_USER_DELETE_SUCCESS:
            return { ...state, tip: '修改成功' }
        case types.PLAYERS_USER_UPDATEPREADID_FAIL ||
            types.PLAYERS_USER_UPDATEORTUNE_FAIL ||
            types.PLAYERS_USER_DELETE_FAIL:
            return { ...state, tip: action.msg }
        case types.PLAYERS_CLEAR_DATA:
            return { ...state, ...initState.other }
        default:
            return state;
    }
}

const reducer = combineReducers({
    listData,
    total,
    edit,
    other
})


export default reducer 