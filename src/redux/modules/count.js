import { getDateStr } from '../../until/tools';
import { types as AppTypes } from './app';
import { JSONP_REQ } from '../middleware/api';
import { user_UserSta } from '../../until/url';
const currentDate= getDateStr.CurDate();

const initState = {
    startTime:currentDate,
    endTime:currentDate,
    RegistCount:0,
    TotalCount:0,
    Records:[],
    diyTime:false
}

export const types = {
    COUNT_USER_STA_SUCCESS:'COUNT_USER_STA_SUCCESS',
    COUNT_TIMECHANGE:'COUNT_DIYTIME',
    COUNT_DIYTIME:'COUNT_DIYTIME'
}

export const actions = {
    userSta:(sd,ed)=>{
        return (dispatch,getState) => {
            dispatch({
                type:types.COUNT_TIMECHANGE,
                data:{
                    startTime:sd,
                    endTime:ed,
                    diyTime:false
                }
            })
            const url = user_UserSta({
                userName: getState().app.userInfo.UserName,
                userId: getState().app.userInfo.UserId,
                sd: sd+'T00:00:00',
                ed: ed+'T23:59:59',
                gameIds: 3
            })
            dispatch(backUserSta(url));
        }
    },
    diyTime:(diyTime)=>({
        type:types.COUNT_DIYTIME,
        diyTime,
    })
}

const backUserSta = (url) =>({
    [JSONP_REQ]:{
        types:[
            AppTypes.APP_LOADING,
            types.COUNT_USER_STA_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api:url,
        tipAutoCancel:true
    }
})

export const getTotalData = (state)=>{
    return {
        registCount:state.count.RegistCount,
        totalCount:state.count.TotalCount
    }
}

export const getDateTimer = (state) => {
    return {
        startTime:state.count.startTime,
        endTime:state.count.endTime
    }
}

export const getGameRecords = (state) => {
    return state.count.Records
}

export const getDiyTime = (state) => {
    return state.count.diyTime
}

const reducer = (state=initState, action)=>{
    switch(action.type){
        case types.COUNT_USER_STA_SUCCESS:
            let TotalCount = 0;
            action.data.Records.forEach(val => {
                TotalCount+=val.Count;
            });
            return {...state, ...action.data,TotalCount}
        case types.COUNT_TIMECHANGE:
            return {...state,...action.data}
        case types.COUNT_DIYTIME:
            return {...state,diyTime:action.diyTime}
        default:
            return state;
    }
}

export default reducer;

