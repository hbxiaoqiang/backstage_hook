import config from '../config';

const parame =(url,data)=>{
    let str = '?'
    if(!url.includes('User/Login')){
        str += 'partnerId=' + config.partnerId + '&';
    }
    Object.entries(data).forEach(function(value,index,arr){
        if(index === (arr.length-1)){
            str +=value[0] +'=' + value[1]; 
        }else{
            str +=value[0] +'=' + value[1]+'&'; 
        }
    })
    return config.serverIp+ 'api/' + url+ str;
}

export const firstOrDefault = data => parame('User/FirstOrDefault',data);

export const signature = data => parame('wechat/Signature',data);

export const user_Count = data => parame('User/Count',data);

export const user_List = data => parame('User/List',data);

export const user_UpdateFortune = data => parame('User/UpdateFortune',data);

export const user_UpdateMobile = data => parame('User/UpdateMobile',data);

export const user_UpdatePassword = data => parame('User/UpdatePassword',data);

export const user_Delete = data => parame('User/Delete',data);

export const user_Giving = data => parame('User/Giving',data);

export const user_BigSta = data => parame('User/BigSta',data);

export const user_UserSta = data => parame('User/UserSta',data);

export const user_Login = data => parame("User/Login",data);

export const user_UpdateSpreadId = data => parame('User/UpdateSpreadId',data);

export const recordCost_PagedList = data => parame('RecordCost/PagedList',data);

export const message_PagedList = data => parame('Message/PagedList',data);

export const message_UpdateStatus = data => parame('Message/UpdateStatus',data);

export const order_PagedList = data => parame('Order/PagedList',data);

export const order_Statistics = data => parame('Order/Statistics',data);

export const recordDetails_List = data => parame('RecordDetails/List',data);

export const updateContent = data => parame('config/UpdateContent',data);

export const getControl = data => parame('group/GetControl',data);

export const updateControl = data => parame('group/UpdateControl',data);