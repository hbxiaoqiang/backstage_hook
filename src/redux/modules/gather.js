import { getDateStr } from '../../until/tools';
import { types as AppTypes } from './app';
import { JSONP_REQ } from '../middleware/api';
import { user_BigSta } from '../../until/url';
const currentDate= getDateStr.CurDate();

const initState = {
    startTime:currentDate,
    endTime:currentDate,
    adCount:0,
    recharge:0,
    diyTime:false
}

export const types = {
    GATHER_USER_BIG_SUCCESS:'GATHER_USER_BIG_SUCCESS',
    GATHER_TIMECHANGE:'GATHER_TIMECHANGE',
    GATHER_DIYTIME:'GATHER_TIMECHANGE'
}

export const actions = {
    userBigSta:(sd,ed)=>{
        return (dispatch,getState) => {
            dispatch({
                type:types.GATHER_TIMECHANGE,
                data:{
                    startTime:sd,
                    endTime:ed,
                    diyTime:false
                }
            })
            const url = user_BigSta({
                userName: getState().app.userInfo.UserName,
                sd: sd+'T00:00:00',
                ed: ed+'T23:59:59'
            })
            dispatch(backUserBigSta(url));
        }
    },
    diyTime:(diyTime)=>({
        type:types.GATHER_DIYTIME,
        diyTime,
    })
}

const backUserBigSta = (url) =>({
    [JSONP_REQ]:{
        types:[
            AppTypes.APP_LOADING,
            types.GATHER_USER_BIG_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api:url,
        tipAutoCancel:true
    }
})

export const getTotalData = (state)=>{
    return {
        adCount:state.gather.adCount,
        recharge:state.gather.recharge
    }
}

export const getDateTimer = (state) => {
    return {
        startTime:state.gather.startTime,
        endTime:state.gather.endTime
    }
}

export const getDiyTime = (state) => {
    return state.gather.diyTime
}

const reducer = (state=initState, action)=>{
    switch(action.type){
        case types.GATHER_USER_BIG_SUCCESS:
            return {
                ...state, 
                recharge:action.data.Recharge,
                adCount:action.data.NewMemberScore
            }
        case types.GATHER_TIMECHANGE:
            return {...state,...action.data}
        case types.GATHER_DIYTIME:
            return {...state,diyTime:action.diyTime}
        default:
            return state;
    }
}

export default reducer;