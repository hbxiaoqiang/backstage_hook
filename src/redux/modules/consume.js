import { types as AppTypes } from '../modules/app';
import { JSONP_REQ } from '../middleware/api';
import { order_PagedList } from '../../until/url'
const initState = {
    scdt:'',
    ecdt: '',
    loadmore: true,
    ids: [],
    data: {}
}
//充值记录

export const types = {
    CONSUME_DATALIST_RES:'CONSUME_DATALIST_RES',
    CONSUME_DATALIST_SUCCESS:'CONSUME_DATALIST_SUCCESS',
    CONSUME_CLEARDATA:'CONSUME_CLEARDATA'
}

export const actions = {
    getPageList: obj => {
        return (dispatch,getState) => {
            const { app: { userInfo } ,consume:{ loadmore }} = getState();
            if(!loadmore){
                return;
            }
            dispatch({
                type:types.CONSUME_DATALIST_RES,
            })
            const url = order_PagedList({
                userName:userInfo.UserName,
                ...obj
            })
            dispatch(backGetList(url,obj))
        }
    },

    clearData:() => ({
        type:types.CONSUME_CLEARDATA
    }),

    setTitle:title => ({
        type:types.CONSUME_TITLE,
        title
    })
    
}

const backGetList = (url,otherData) => ({
    [JSONP_REQ]:{
        types: [
            AppTypes.APP_LOADING,
            types.CONSUME_DATALIST_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api: url,
        tipAutoCancel: true,
        depth: true,
        otherData
    }
})

export const selector = {
    getList:state => state.consume.ids.map(id => 
        state.consume.data[id]),

    getScdt:state => state.consume.scdt.split('T')[0],

    getEcdt:state => state.consume.ecdt.split('T')[0],

    getLoadmore:state => state.consume.loadmore
}

export default (state=initState,action) => {
    switch(action.type){
        case types.CONSUME_DATALIST_RES:
            return {...state,loadmore:false}
        case types.CONSUME_DATALIST_SUCCESS:
            if(action.data === null) {
                return {...state, 
                    loadmore:true,
                    scdt:action.otherData.scdt,
                    ecdt:action.otherData.ecdt};
            }
            if(action.otherData === 1){
                return { 
                    ...state,
                     ...action.data,
                    loadmore:true,
                    scdt:action.otherData.scdt,
                    ecdt:action.otherData.ecdt };
            }else{
                return {
                    ids:[...state.ids,...action.data.ids],
                    data:{...state.data,...action.data.data},
                    scdt:action.otherData.scdt,
                    ecdt:action.otherData.ecdt,
                    loadmore:true
                }
            }
        case types.CONSUME_CLEARDATA:
            return { ...initState }
        default:
            return state
    }
}