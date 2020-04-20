import { jsonp } from '../../until/request'
import { user_UpdateMobile ,firstOrDefault } from '../../until/url';
import { types as AppTypes } from '../modules/app';
import { JSONP_REQ } from '../middleware/api';

const initState = {
    NickName:'',
    UserId:''
};
//绑定账号

export const types = {
    BindMOBILE_GETUSERINFO:'BindMOBILE_GETUSERINFO'
}

export const actions = {
    updateMobile:(userId,mobileNum) => {
        return (dispatch,getState) => {
            const url = user_UpdateMobile({
                userName: getState().app.userInfo.UserName,
                userId,
                mobileNum
            })
            dispatch({
                type:AppTypes.APP_CONFIRM,
                msg:`绑定ID：[${userId}] 号码：${mobileNum}`,
                sureCall:()=>{ updateMobileRes(dispatch,url) }
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
                        types.BindMOBILE_GETUSERINFO,
                        AppTypes.APP_TOP_TIPS
                    ],
                    api:url,
                    tipAutoCancel:true
                }
            })
        }
    },
    closeChcekPup:() => ({
        type:types.BindMOBILE_GETUSERINFO
    })
}

const updateMobileRes = (dispatch,url)=>{
    dispatch({
        type:AppTypes.APP_CONFIRM
    })
    jsonp(url).then(function(data){
        dispatch({
            type:AppTypes.APP_ALERT,
            msg:'绑定成功'
        })
    }).catch(function(err){
        dispatch({
            type:AppTypes.APP_ALERT,
            msg: err
        })
    })
}

export const selector = {
    getPlayerInfo:state => state.bindMobile
}

export default (state=initState,action) => {
    if(action.type === types.BindMOBILE_GETUSERINFO){
        if(action.data){
            const { NickName,UserId } = action.data
            return {NickName,UserId}
        }else{
            return {NickName:'',UserId:''}
        }
    }
    return state;
}