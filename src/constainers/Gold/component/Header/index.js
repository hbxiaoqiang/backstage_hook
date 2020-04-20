import React from 'react';
import { HeaderStyle } from './style';

function Header(props){
    const {gold} = props;
    return(
        <HeaderStyle>
            <div className='info'>
                当前房卡数：<span>
                    {gold}
                </span>
            </div>
        </HeaderStyle>
    )
}


export default Header;