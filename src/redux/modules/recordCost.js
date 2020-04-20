import { types as AppTypes } from '../modules/app';
import { JSONP_REQ } from '../middleware/api';
import {
    recordCost_PagedList
} from '../../until/url';

const initState = {
    startTime:'',
    endTime:'',
    loadmore:true,
    data: []
}

export const types = {
    RECORDCOST_PAGEDLIST_RES:'RECORDCOST_PAGEDLIST_RES',
    RECORDCOST_PAGEDLIST_SUCCESS:'RECORDCOST_PAGEDLIST_SUCCESS',
    RECORDCOST_CLEAR_DATA: 'RECORDCOST_CLEAR_DATA',
}

export const actions = {
    pagedList : obj => {
        return (dispatch,getState) => {
            const { app: { userInfo } ,recordCost:{ loadmore }} = getState();
            if(!loadmore){
                return;
            }
            dispatch({
                type:types.RECORDCOST_PAGEDLIST_RES,
                startTime:obj.sdt||'',
                endTime:obj.edt||''
            })
            let data = {
                userName: userInfo.UserName,
                ...obj
            }
            const url = recordCost_PagedList(data);
            dispatch(backPagedList(url,obj.page))
        }
    },

    clearData: () => {
        return (dispatch) => {
            dispatch({
                type: types.RECORDCOST_CLEAR_DATA
            })
        }
    }
}

const backPagedList = (url,page) => ({
    [JSONP_REQ]: {
        types: [
            AppTypes.APP_LOADING,
            types.RECORDCOST_PAGEDLIST_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api: url,
        tipAutoCancel: true,
        otherData:page
    }
})

export const selector = {
    getLoadMore:state => state.recordCost.loadmore,
    getDatas:state => state.recordCost.data,
    getDates:state => ({ 
        startTime:state.recordCost.startTime.split('T')[0],
        endTime:state.recordCost.endTime.split('T')[0] 
    })
}

export default (state=initState,action) => {
    switch(action.type){
        case types.RECORDCOST_PAGEDLIST_RES:
            return {
                ...state,
                startTime:action.startTime,
                endTime:action.endTime,
                loadmore:false
            }
        case types.RECORDCOST_PAGEDLIST_SUCCESS:
            if(action.data === null) return {...state, loadmore:true};
            if(action.otherData === 1){
                return { ...state, data:action.data,loadmore:true };
            }else{
                return {
                    ...state,
                    data:[...state.data,...action.data],
                    loadmore:true
                }
            }
        case types.RECORDCOST_CLEAR_DATA:
            return {...initState}
        default:
            return state;
    }
}