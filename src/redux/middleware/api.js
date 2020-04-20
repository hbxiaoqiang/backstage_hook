import { jsonp } from '../../until/request';

export const JSONP_REQ = 'JSONP_REQ';
/*
//经过中间件处理的action所具有的标识
JSONP_REQ:{
    types:[start,success,fail]
    api:'',
    tipAutoCancel /5秒后消失错误提醒
    otherData // 其他数据
    depth //是进行数组转化为键值对 处理后在转发
    isLogin://登陆的接多了一层data
}

*/

export const withKeyValue = (data,key) => {
    if(!Array.isArray(data)){
        return data
    }else{
        let newData = {};
        let ids = [];
        for(let value of data){
            newData[value[key]] = value
            ids.push(value[key]);
        }
        return {
            ids,
            data:newData
        }
    }
}

export default store => next => action=> {
    const callReq = action[JSONP_REQ];
    if(typeof callReq === 'undefined'){
        return next(action);
    }
    const {types,api,tipAutoCancel,otherData,isLogin,depth} = callReq;
    if(!Array.isArray(types) || types.length !== 3){
        throw new Error(' types必须一个长度3的数组')
    }
    if(typeof api !== 'string'){
        throw new Error(' api为字符串类型的URL')
    }
    const [requestType, successType, failureType] = types;
    next({
        type:requestType,
        request:true
    })
    jsonp(api,isLogin).then(function(data){
        let nextData = {
            type:successType,
        }
        depth?
        Object.assign(nextData,{ data :  withKeyValue(data,'Id')}):
        Object.assign(nextData,{ data });
        

        if(typeof otherData !== 'undefined') Object.assign(nextData,{otherData});
        next(nextData)

        next({
            type:requestType,
            request:false
        })
    },function(err){
        next({
            type:failureType,
            msg:err
        })
        if(tipAutoCancel){
            setTimeout(()=>{
                next({
                    type:failureType,
                    msg:''
                })
            },5000);
        }
        next({
            type:requestType,
            request:false
        })
    })
}