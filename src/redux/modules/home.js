const initState = {
    hall:true,
    count:false,
    order:false
};

export const types = {
    HOME_PAGE:'HOME_PAGE'
}

export const actions = {
    changePage:(page)=>({
        type:types.HOME_PAGE,
        page:page
    })
}

export  const selecter = {
    getHall:state => state.home.hall,
    getCount:state => state.home.count,
    getOrder:state => state.home.order,
    getCurPage:state =>{
        if(state.home.hall) return 'hall';
        if(state.home.count) return 'count';
        if(state.home.order) return 'order';
    }
}

const reducer = (state=initState, action)=>{
    if(action.type === types.HOME_PAGE){
        return {...state,...{hall:false,count:false,order:false},[action.page]:true}
    }
    return state;
}

export default reducer;