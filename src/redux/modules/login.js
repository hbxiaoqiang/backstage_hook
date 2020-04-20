import {user_Login} from '../../until/url';
import { types as appTypes } from '../../redux/modules/app';
import { JSONP_REQ } from '../middleware/api';
//18224242464
const initState={
    userName:'',
    passWord:'',
    tipInfo:''
}

export const types={
    LOGIN_USERNAME:'LOGIN/USERNAME',
    LOGIN_PASSWORD:'LOGIN/USERWORD',
    LOGIN_SUCCESS:'LOGIN/SUCCESS',
    LOGIN_FAILURE:'LOGIN/FAILURE',
    LOGIN_CLEAR_TIP:'LOGIN/CLEAR/TIP'
}

export const actions={
    inputUserName:(userName)=>({
        type:types.LOGIN_USERNAME,
        userName
    }),
    inputPassWord:(passWord)=>({
        type:types.LOGIN_PASSWORD,
        passWord
    }),
    submitData:()=>{
        return (dispatch, getState)=>{
            const { userName, passWord } = getState().login;
            if(userName === '') return dispatch({
                type:types.LOGIN_FAILURE,
                msg:'用户名必须填写'
            })
            if(passWord === '') return dispatch({
                type:types.LOGIN_FAILURE,
                msg:'密码必须填写'
            })
            const url = user_Login({
                userName,
                passWord
            })
            dispatch(requsetLogin(url))
        }
    },
    clearTip:()=>({
        type:types.LOGIN_CLEAR_TIP,
    })
}

const requsetLogin=(url)=>({
    [JSONP_REQ]:{
        types:[
            appTypes.APP_LOADING,
            appTypes.APP_FIRSTORDEFAUL_SUCCESS,
            //types.LOGIN_FAILURE
            appTypes.APP_TOP_TIPS
        ],
        api:url,
        tipAutoCancel:false,
        isLogin:true
    }
})

export const getUserName = (state)=>{
    return state.login.userName;
}

export const getPassWord = (state)=>{
    return state.login.passWord;
}

export const getTipInfo = (state)=>{
    return state.login.tipInfo;
}

const reducer = (state=initState ,action)=>{
    switch(action.type){
        case types.LOGIN_FAILURE:
            return {...state,tipInfo:action.msg}
        case types.LOGIN_CLEAR_TIP:
            return {...state,tipInfo:''}
        case types.LOGIN_USERNAME:
            return {...state,userName:action.userName}
        case types.LOGIN_PASSWORD:
            return {...state, passWord:action.passWord}
        default:
            return state;
    }
}

export default reducer;