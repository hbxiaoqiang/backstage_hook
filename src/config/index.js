export default {
    partnerId:9,
    serverIp:'http://www.7uao.com/',
    wxAppid: "wxc0c60e07a4916091",
    imgPath:"upload/headimg/",
    userType: {
        Programer: 10,//技术员
        Admin: 11,//管理员
        Partner: 12,//合作伙伴
        Manager: 13,//代理
        Gamer: 14,
        Tester: 15,
        Robot: 16,
    },
    userTypeName: {
        10: "技术员",
        11: "管理员",
        12: "合作伙伴",
        13: "代理",
        14: "玩家",
        15: "测试员"
    },
    userStatus: {
        wait: 0,
        normal: 1,
        locked: 2
    },
    operateTip: {
        gamer: "抱歉，非正式代理不能进入后台管理",
        apply: "操作成功，请重公众号登陆管理后台"
    },
    messageType: {
        suggestion: 1,
        message: 2,
        outMoney: 3
    },
    messageStatus: {
        newMsg: 1,
        processed: 2,
        invalid: 3
    },
    messageStatusText: {
        1: "未处理",
        2: "已处理",
        3: "作废"
    },
    cashText:{
        1:"待处理",
        2:'已拒绝',
        3:'已提现'
    },
    classify: {
        3: [1, 2, 3, 6, 8],
        4: [1, 2, 4, 8],
        5: [1, 2, 5, 6, 8],
        6: [1, 2, 8,9],
        7: [1, 2, 8,10],
        8:[2,8]
    },
    gameName:{
        '3':'浦江麻将'
    },
    appName:{
        "9":"浦江棋牌"
    }
}

export const program = {
    '1':{
        name:'玩家',
        ico:'iconfont icon-wanjia',
        href:'/player',
        permise:[10,11,15]
    },
    '2':{
        name:'房卡',
        ico:'iconfont icon-fangqia',
        href:'/gold',
        permise:[10,11,15]
    },
    '3':{
        name:'编辑公告',
        ico:'iconfont icon-nichengxiugai',
        href:'notice',
        permise:[10,11,15]
    },
    '4':{
        name:'公会',
        ico:'iconfont icon-gongneng',
        href:'group',
        permise:[10,11,15]
    },
    '5':{
        name:'申请提现',
        ico:'iconfont icon-tixian',
        href:'#!',
        permise:[12,13]
    },
    '6':{
        name:'提现审批',
        ico:'iconfont icon-shenpi',
        href:'/adminCash',
        permise:[10,11,15]
    },
    '7':{
        name:'提现记录',
        ico:'iconfont icon-hongbao',
        href:'/packet',
        permise:[10,11,15]
    },
    '8':{
        name:'充值记录',
        ico:'iconfont icon-chongzhi',
        href:'/consume/recharge',
        permise:[10,11,15]
    },
    '9':{
        name:'充值提成',
        ico:'iconfont icon-chongzhi',
        href:'#!',
        permise:[12,13]
    },
    '10':{
        name:'汇总',
        ico:'iconfont icon-qianbao',
        href:'/gather',
        permise:[10,11,15]
    },
    '11':{
        name:'绑定账号',
        ico:'iconfont icon-gaiming',
        href:'/bindMobile',
        permise:[10,11,15]
    },
    '12':{
        name:'修改密码',
        ico:'iconfont icon-mima1',
        href:'/password',
        permise:[10,11,15]
    },
}

export const footerNav = {
    '1':{
        name:'首页',
        page:'hall',
        ico:'iconfont icon-shouye1',
    },
    '2':{
        name:'游戏统计',
        page:'count',
        ico:'iconfont icon-tongji2',
    },
    '3':{
        name:'充值统计',
        page:'order',
        ico:'iconfont icon-qianbao',
    }
}