
export const storage={
    get(key,isSession){
        return JSON.parse(isSession?window.sessionStorage.getItem(key):
        window.localStorage.getItem(key));
    },
    set(key,value,isSession){
        isSession?window.sessionStorage.setItem(key,JSON.stringify(value)):
        window.localStorage.setItem(key,JSON.stringify(value));
    },
    del(key){
        window.localStorage.removeItem(key)
    }
}

export const historyMethod = {
    back(){
        window.history.back();
    }
}

export const locationMethod = {
    href(url){
        window.location.href=url;
    }
}

const format = function (format,date) {
    var o = {
        "M+": date.getMonth() + 1, //month    
        "d+": date.getDate(), //day    
        "h+": date.getHours(), //hour    
        "m+": date.getMinutes(), //minute    
        "s+": date.getSeconds(), //second    
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter    
        "S": date.getMilliseconds() //millisecond    
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length === 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

export const getDateStr = {
    AddDay(AddDayCount) {//可传负值，就为AddDayCount前
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
        let y = dd.getFullYear();
        let m = dd.getMonth() + 1;//获取当前月份的日期
        let d = dd.getDate();
        if (m < 10) m = "0" + m;
        if (d < 10) d = "0" + d;
        return y + "-" + m + "-" + d;
    },
    Current() {
        const dd = new Date();
        let y = dd.getFullYear();
        let m = dd.getMonth() + 1;
        let d = dd.getDate();
        let h = dd.getHours();
        let mi = dd.getMinutes();
        let s = dd.getSeconds();
        return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
    },
    CurDate() {//返回格式  2016-09-01
        const dd = new Date();
        let y = dd.getFullYear();
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return (y + '-' + m + '-' + d);
    },
    CurTime () {//返回格式  2016-09-01T01:05:09
        const dd = new Date();
        let y = dd.getFullYear();
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        let h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
        let mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
        let s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
        return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
    },
    CurHours() {//返回格式  2016-09-01T01:05:09
        return new Date().getHours();
    },
    GetDate(val) {
        if (typeof val == "string") val = val.replace('T', ' ').replace(/-/g, '/');
        const dd = new Date(val);
        let y = dd.getFullYear();
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);;//获取当前月份的日期
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
    },
    GetTime: function (val) {
        if (typeof (val) == "string") val = val.replace('T', ' ').replace(/-/g, '/');
        const dd = new Date(val);
        let y = dd.getFullYear();
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);;//获取当前月份的日期
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        let h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
        let mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
        let s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
        return y + "-" + m + "-" + d + 'T' + h + ':' + mi + ':' + s;
    },
    getDateAdd: function (AddDayCount, val) {
        if (!!val && typeof (val) == "string") val = val.replace('T', ' ').replace(/-/g, '/');
        const dd = (!!val) ? new Date(val) : new Date();
        dd.setDate(dd.getDate() + AddDayCount);//获取相对于val,AddDayCount天后的日期
        let y = dd.getFullYear();
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        //let h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
        //let mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
        //let s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
        //return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
        return (y + '-' + m + '-' + d);
    },
    getDay: function (val, AddDayCount) {
        const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', ];
        if (typeof (val) == "string") val = val.replace('T', ' ').replace(/-/g, '/');
        const dd = new Date(val);
        dd.setDate(dd.getDate() +  (!!AddDayCount ? AddDayCount : 0));
        let w = dd.getDay();
        return week[w];
    },
    getWeekOnDay: function (AddDayCount) {
        const current = this.CurDate();
        const dd = new Date(current);
        dd.setDate(dd.getDate() + (!!AddDayCount ? AddDayCount : 0));
        let w = dd.getDay() === 0 ? 6 : dd.getDay()-1;
        return this.AddDay(-w);
    },
    getMothOnDay: function () {
        return this.CurDate().substr(0,8) + "01";
    },
    getPreMonth: function () {
        let dayMSec = 24 * 3600 * 1000;
        let today = new Date();
        let lastMonthFirstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        //得到本月第一天    
        let nowMonthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        //得到上一个月的最后一天的毫秒值    
        let lastMonthLastDayMSec = nowMonthFirstDay.getTime() - 1 * dayMSec;
        let lastMonthLastDay = new Date(lastMonthLastDayMSec);
        return [format('yyyy-MM-dd',lastMonthFirstDay), format('yyyy-MM-dd',lastMonthLastDay)]
    },
    getMonthDay: function (count,d) {
        let dayMSec = 24 * 3600 * 1000;
        let date = new Date(d);
        let lastMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + 1 + count, 1);
        //得到本月第一天    
        let nowMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + count, 1);
        //得到上一个月的最后一天的毫秒值    
        let lastMonthLastDayMSec = lastMonthFirstDay.getTime() - 1 * dayMSec;
        let lastMonthLastDay = new Date(lastMonthLastDayMSec);
        return [format('yyyy-MM-dd',nowMonthFirstDay), format('yyyy-MM-dd',lastMonthLastDay)]
    },
    AddHours: function (AddHoursCount) {
        const dd = new Date();
        dd.setHours(dd.getHours() + AddHoursCount);
        let y = dd.getFullYear();
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);;//获取当前月份的日期
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        let h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
        let mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
        let s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
        return y + "-" + m + "-" + d + 'T' + h + ':' + mi + ':' + s;
    },
    dateArray: function (sDate, eDate) {
        let newArr = [eDate];
        let lisp = () => {
            let newDate = this.getDateAdd(-1, newArr[newArr.length - 1]);
            if (newDate >= sDate && newArr.length<31) {
                newArr.push(newDate);
                lisp();
            }
        }
        lisp();
        return newArr;
    },
    monthArray: function (sMonth, eMonth) {
        let newArr = [this.getMonthDay(0,eMonth + "-01")];
        let lisp = () => {
            let newDate = this.getMonthDay(-1, newArr[newArr.length - 1][0]);
            if (newDate[0] >= (sMonth + "-01")) {
                newArr.push(newDate);
                lisp();
            }
        }
        lisp();
        return newArr;
    },
    differDays: function (time1,time2) {
        return (Date.parse(time2.replace(/-/g, '/')) - Date.parse(time1.replace(/-/g, '/'))) / (1000 * 60 * 60 * 24);
    }
}

export const dateTxt = (st, ed) => {
    let name = st + ' 至 ' + ed;
    if (st === getDateStr.CurDate()) {
        name = '今日';
    } else if (st === getDateStr.AddDay(-1)) {
        name = '昨日';
    }
    return name;
}

export const withUrlParam = str => {
    if(!str) return false;
    if(str.indexOf('?') === 0){
        const newArr = str.replace('?','').split('&');
        let  newObj = {};
        newArr.forEach(function(value){
            let param = value.split('=');
            newObj[param[0]] = param[1]
        })
        return newObj
    }else{
        throw new Error('查询第一个必须为?');
    }
}