import { combineReducers } from 'redux';
import { storage } from '../../until/tools';
import { firstOrDefault } from '../../until/url';
import { JSONP_REQ } from '../middleware/api';

const initState = {
    userInfo:{
        ...storage.get('UserInfo')
    },
    common:{
        loading:false,
        topTips:'',
        alert:'',
        confirm:{
            sureCall:'',
            tip:'',
        }
    }

}

export const types = {
    //userinfo
    APP_FIRSTORDEFAUL_SUCCESS:'APP_FIRSTORDEFAUL_SUCCESS',
    APP_EXIT:'APP_EXIT',
    //loading types;
    APP_LOADING:'APP_LOADING',
    APP_TOP_TIPS:'APP_TOP_TIPS',
    APP_ALERT:'APP_ALERT',
    APP_CONFIRM:'APP_CONFIRM'
}

export const actions = {
    fristOrDefaul:()=>{
        return (dispatch,getState) =>{
            const { UserName } = getState().app.userInfo;
            if(UserName){
                const url =firstOrDefault({
                    userName:UserName
                });
                dispatch(backFristOrdefaul(url));
            }
        }
    },
    exitLogin:()=>({
        type:types.APP_EXIT
    }),
    clearTopTips:()=>({
        type:types.APP_TOP_TIPS,
        msg:''
    }),
    clearAlert:()=>({
        type:types.APP_ALERT,
        msg:''
    }),
    clearConfirm:()=>({
        type:types.APP_CONFIRM,
        msg:''
    })
}

export const getUserInfo=(state)=>{
    return state.app.userInfo;
}

export const getCommon=(state)=>{
    return state.app.common;
}

const backFristOrdefaul=(url)=>({
    [JSONP_REQ]:{
        types:[
            types.APP_LOADING,
            types.APP_FIRSTORDEFAUL_SUCCESS,
            types.APP_TOP_TIPS
        ],
        api:url,
        tipAutoCancel:true
    }
})

const userInfo = (state = initState.userInfo, action) =>{
    switch(action.type){
        case types.APP_FIRSTORDEFAUL_SUCCESS:
            storage.set('UserInfo',action.data);
            return {...state, ...action.data}
        case types.APP_EXIT:
            storage.del('UserInfo');
            return {}
        default:
            return state
    }
}

const common = (state=initState.common, action) => {
    switch(action.type){
        case types.APP_LOADING:
            return {...state,loading:action.request}
        case types.APP_TOP_TIPS:
            return {...state,topTips:action.msg}
        case types.APP_ALERT:
            return {...state, alert:action.msg}
        case types.APP_CONFIRM:
            if(!action.msg){
                return {...state, confirm:{sureCall:'',tip:action.msg}}
            }else{
                return {...state, confirm:{sureCall:action.sureCall,tip:action.msg}}
            }
        default:
            return state;
    }
}

const reducer= combineReducers({userInfo,common})
export default reducer;
