import { types as AppTypes } from './app';
import { updateContent } from '../../until/url';
import { jsonp } from '../../until/request';

const initState={ };

export const actions = {
    upDateNotice:content => (dispatch,getSate) => {
        if(!content){
            return dispatch({
                type:AppTypes.APP_ALERT,
                msg:'更新内容不能为空'
            })
        }else{
            const url = updateContent({
                id:19,
                content
            })
            jsonp(url).then(data=>{
                return dispatch({
                    type:AppTypes.APP_ALERT,
                    msg:'更新内容成功'
                })
            }).catch(err=>{
                return dispatch({
                    type:AppTypes.APP_ALERT,
                    msg:'更新失败'
                })
            })
        }
    }
}

const rudecer = (state=initState,action) => {
    return state;
}

export default rudecer;