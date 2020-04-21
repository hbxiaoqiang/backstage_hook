import React ,{ useState } from 'react';
import { FortuneStyle } from './style'
import { MaskStyle } from '../../../../component/CommonStyle';

function Fortune(props){
    const {
        cancelFn,
        sureFn,
        close:fortuneClose
    }=props;

    const [value ,setValue] = useState('');

    const changeHandle = (e)=>{
        setValue(e.target.value)
    }

    const cancelAction = ()=>{
        cancelFn(null);
        close()
    }

    const sureAction = () =>{
        sureFn(value);
        close()
    }

    const close = ()=>{
        fortuneClose();
    }

    return (
        <FortuneStyle>
            <MaskStyle onClick={close}></MaskStyle>
            <div className='fortune-content'>
                <div className='title'>胜率调整</div>
                <div className='input'>
                    <input 
                    type='number'
                    placeholder='请输入胜率'
                    onChange={ changeHandle }
                    value={ value }
                    />
                    <p>请输入-100~100的整数</p>
                </div>
                <div className='actionBtn'>
                    <button className='cancel' onClick={cancelAction}>取消胜率</button>
                    <button className='sure' onClick={sureAction}>确定修改</button>
                </div>
            </div>
        </FortuneStyle>
    )
}

export default Fortune;
