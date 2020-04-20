import React from 'react';
import { Header as HeaderStyle } from './style';

function Header(props){
    return (
        <HeaderStyle>
            <div className="welcome">{props.appName}</div>
            <span className="exit-login" onClick={props.exitLogin}>退出</span>
            <div className="userInfo">
                <p className="img">
                    <img src={props.imgUrl} alt=""/>
                </p>
                <p className='nickName'>{props.nickName}</p>
                <p className='type'>
                    <span>{props.typeName}</span>
                </p>
            </div>
        </HeaderStyle>
    )
}

export default Header;