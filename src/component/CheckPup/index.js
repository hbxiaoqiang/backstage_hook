import React from 'react';
import { CheckStyle } from './style';
import { MaskStyle } from '../CommonStyle';
function CheckPup(props) {
    const {close,headimg,nickname,gold} = props
    return(
        <CheckStyle>
            <MaskStyle onClick={close}></MaskStyle>
            <div className='content'>
                <p>
                    请确认信息
                </p>
                <p className='img'>
                    <img
                    src={headimg}
                    alt='' width='50' height='50' />
                </p>
                <p className='userInfo'>
                    <span>玩家昵称：</span>
                    {
                        nickname
                    }
                </p>
                {
                    gold?
                    (
                        <p className='gold'>
                    <span>当前房卡：</span>
                    {
                        gold
                    }
                </p>
                    ):null
                }
                
            </div>
        </CheckStyle>
    )
}

export default CheckPup