import { JSONP_REQ } from '../middleware/api';
import { getDateStr } from '../../until/tools';
import { types as AppTypes } from '../modules/app';
import { order_Statistics } from '../../until/url';

const initState = {
    startTime:getDateStr.CurDate(),
    endTime:getDateStr.CurDate(),
    statistics:[],
    diyTime:false,
    fangkaCost:0,
    playerRech:0
};

export const types = {
    ORDER_STATISTICS_SUCCESS:'ORDER_STATISTICS_SUCCESS',
    ORDER_TIMERCHANGE:'ORDER_TIMERCHANGE',
    ORDER_DIYTIME:'ORDER_DIYTIME'
}

export const actions = {
    statistics:(st,ed)=>{
        return (dispatch,getState)=>{
            dispatch({
                type:types.ORDER_TIMERCHANGE,
                data:{
                    startTime:st,
                    endTime:ed,
                    diyTime:false
                }
            })
            const url = order_Statistics({
                userName: getState().app.userInfo.UserName,
                userId: getState().app.userInfo.UserId,
                sd: st+'T00:00:00',
                ed: ed+'T23:59:59',
                page:1,
                size:1000
            })
            dispatch(backStatisticsRes(url));
        }
    },

    diyTime:(diyTime)=>({
        type:types.ORDER_DIYTIME,
        diyTime,
    })

}

const backStatisticsRes = (api)=>({
    [JSONP_REQ]:{
        types:[
            AppTypes.APP_LOADING,
            types.ORDER_STATISTICS_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api,
        tipAutoCancel:true
    }
})

export const getTotalData = (state)=>{
    return {
        fangkaCost:state.order.fangkaCost,
        playerRech:state.order.playerRech
    }
}

export const getDateTimer = (state) => {
    return {
        startTime:state.order.startTime,
        endTime:state.order.endTime
    }
}

export const getRecords = (state) => {
    return state.order.statistics
}

export const getDiyTime = (state) => {
    return state.order.diyTime
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case types.ORDER_STATISTICS_SUCCESS:
            let fangkaCost=0,playerRech=0;
            for(let value of action.data){
                if(value.TypeId > 11){
                    fangkaCost += Number(value.Cost);
                    playerRech +=Number(value.Total);
                }
            }
            return {...state,statistics:action.data,fangkaCost,playerRech}
        case types.ORDER_TIMERCHANGE:
            return {...state,...action.data}
        case types.ORDER_DIYTIME:
            return {...state,diyTime:action.diyTime}
        default:
            return state;
    }
}

export default reducer;