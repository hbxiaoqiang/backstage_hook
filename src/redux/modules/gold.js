import { jsonp } from '../../until/request'
import { user_Giving ,firstOrDefault } from '../../until/url';
import { types as AppTypes } from '../modules/app';
import { JSONP_REQ } from '../middleware/api';

const initState = {
    NickName:'',
    Gold:'',
    UserId:''
};

export const types = {
    GOLD_GETUSERINFO:'GOLD_GETUSERINFO'
}

export const actions = {
    giving:(userId,count) => {
        return (dispatch,getState) => {
            const url = user_Giving({
                userName: getState().app.userInfo.UserName,
                userId,
                count
            })
            dispatch({
                type:AppTypes.APP_CONFIRM,
                msg:`赠送ID：[${userId}] 房卡：${count}`,
                sureCall:()=>{ givingRes(dispatch,url) }
            })
        }
    },
    getUserInfo:(userId) => {
        return (dispatch,getState) => {
            const url =firstOrDefault({
                userName: getState().app.userInfo.UserName,
                userId
            });
            dispatch({
                [JSONP_REQ]:{
                    types:[
                        AppTypes.APP_LOADING,
                        types.GOLD_GETUSERINFO,
                        AppTypes.APP_TOP_TIPS
                    ],
                    api:url,
                    tipAutoCancel:true
                }
            })
        }
    },
    closeChcekPup:() => ({
        type:types.GOLD_GETUSERINFO
    })
}

const givingRes = (dispatch,url)=>{
    dispatch({
        type:AppTypes.APP_CONFIRM
    })
    jsonp(url).then(function(data){
        if(typeof data === 'string' && data.includes('房卡不足')){
            return Promise.reject(data);
        }else{
            dispatch({
                type:AppTypes.APP_ALERT,
                msg:'赠送成功'
            })
        }
    }).catch(function(err){
        dispatch({
            type:AppTypes.APP_ALERT,
            msg: err
        })
    })
}

export const selecter = {
    getPlayerInfo:state => state.gold
}

const reducer = (state=initState,action) => {
    if(action.type === types.GOLD_GETUSERINFO){
        if(action.data){
            const { NickName,Gold,UserId } = action.data
            return {...state , NickName,Gold,UserId}
        }else{
            return {...state,NickName:'',Gold:'',UserId:''}
        }
    }
    return state;
}

export default reducer;