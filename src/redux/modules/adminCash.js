import { JSONP_REQ } from '../middleware/api';
import { types as AppTypes } from '../modules/app';
import { message_PagedList,message_UpdateStatus } from '../../until/url';

const initState = {
    loadmore:true,
    ids: [],
    data: {}
}
//提现审批

export const types = {
    ADMINCASH_LIST_RES:'ADMINCASH_LIST_RES',
    ADMINCASH_LIST:'ADMINCASH_LIST',
    ADMINCASH_UPDATESTATUS:'ADMINCASH_UPDATESTATUS',
    ADMINCASH_CLEAR_DATA:'ADMINCASH_CLEAR_DATA'
}

export const actions = {
    getPageList:obj => {
        return (dispatch,getState) => {
            const {app:{userInfo},adminCash:{loadmore}} = getState();
            if(!loadmore) return;
            dispatch({
                type:types.ADMINCASH_LIST_RES
            })
            const data = {
                userName: userInfo.UserName,
                ...obj
            }
            const url = message_PagedList(data);
            dispatch(backPageList(url,obj.page));
        }
    },

    updateStatus:(ids,status,isWechat) => {
        return (dispatch,getState) => {
            const url = message_UpdateStatus({
                userName: getState().app.userInfo.UserName,
                ids,
                status,
                isWechat
            })
            dispatch(backUpdate(url, { ids, status,isWechat }))
        }
    },

    clearData: () => {
        return (dispatch) => {
            dispatch({
                type: types.ADMINCASH_CLEAR_DATA
            })
        }
    }
}

const backPageList = (url,page) => ({
    [JSONP_REQ]: {
        types: [
            AppTypes.APP_LOADING,
            types.ADMINCASH_LIST,
            AppTypes.APP_TOP_TIPS
        ],
        api: url,
        tipAutoCancel: true,
        depth: true,
        otherData:page
    }
})

const backUpdate = (url ,otherData) => ({
    [JSONP_REQ]: {
        types: [
            'null',
            types.ADMINCASH_UPDATESTATUS,
            AppTypes.APP_TOP_TIPS
        ],
        api: url,
        otherData
    }
})

export const getDatas = state => state.adminCash.ids.map(id => state.adminCash.data[id]);

export const getLoadMore = state => state.adminCash.loadmore

export default (state=initState,action) => {
    switch(action.type){
        case types.ADMINCASH_LIST_RES:
        return {...state,loadmore:false};
        case types.ADMINCASH_LIST:
            if(action.data === null) return {...state, loadmore:true};
            if(action.otherData === 1){
                return {...state, loadmore:true,...action.data}
            }else{
                return {
                    ids:[...state.ids,...action.data.ids],
                    data:{...state.data,...action.data.data},
                    loadmore:true
                }
            };
        case types.ADMINCASH_UPDATESTATUS:
            const { ids } = action.otherData;
            const newIds = state.ids.filter(id => {
                return !ids.includes(id)
            })
            return { ...state, ids:newIds };
        case types.ADMINCASH_CLEAR_DATA:
            return {...state,...initState}
        default:
            return state;
    }
}