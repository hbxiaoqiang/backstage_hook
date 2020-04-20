import React, { memo } from 'react';
import { HeaderStyle } from './style';
const Header = memo(function (props) {
    const {backHandle,backBtn,title,otherHandle,otherBtn} = props;
    console.log('header')
    return (
        <HeaderStyle>
        {
            backHandle?(
             <span onClick={backHandle} className="back-top">{ backBtn||'返回' }</span>
            ):null
        }
         <p>{title}</p>
         {
             otherHandle?
             <span onClick={otherHandle} className="other-btn">{
                otherBtn
             }</span>:null
         }
     </HeaderStyle>
    )
})

export default Header;