import { JSONP_REQ } from '../middleware/api';
import { user_UpdatePassword } from '../../until/url';
import { types as AppTypes } from '../modules/app';

const initState = {}

export const updatePasswod = (password,oldPassword) => {
    return (dispatch,getState) => {
        if(!password||!oldPassword){
            return dispatch({
                type:AppTypes.APP_ALERT,
                msg:'密码不能为空'
            })
        }
        if(password === oldPassword){
            return dispatch({
                type:AppTypes.APP_ALERT,
                msg:'新旧密码不能一致'
            })
        }
        const url = user_UpdatePassword({
            userName: getState().app.userInfo.UserName,
            password,
            oldPassword
        })

        dispatch({
            [JSONP_REQ]:{
                types:[
                    'null',
                    'null',
                    AppTypes.APP_TOP_TIPS
                ],
                api:url,
                tipAutoCancel:true
            }
        })
    }
}
//修改账号
export default (state=initState,action) => {
    return state
}