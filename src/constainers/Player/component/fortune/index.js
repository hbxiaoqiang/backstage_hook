import React ,{ Component } from 'react';
import { FortuneStyle } from './style'
import { MaskStyle } from '../../../../component/CommonStyle';

export default class Fortune extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    render(){
        return (
            <FortuneStyle>
                <MaskStyle onClick={this.close}></MaskStyle>
                <div className='fortune-content'>
                    <div className='title'>胜率调整</div>
                    <div className='input'>
                        <input 
                        type='number'
                        placeholder='请输入胜率'
                        onChange={ this.changeHandle }
                        value={this.state.value}
                        />
                        <p>请输入-100~100的整数</p>
                    </div>
                    <div className='actionBtn'>
                        <button className='cancel' onClick={this.cancelAction}>取消胜率</button>
                        <button className='sure' onClick={this.sureAction}>确定修改</button>
                    </div>
                </div>
            </FortuneStyle>
        )
    }

    changeHandle = (e)=>{
        this.setState({
            value:e.target.value
        })
    }

    cancelAction = ()=>{
        this.props.cancelFn(null);
        this.close()
    }

    sureAction = () =>{
        this.props.sureFn(this.state.value);
        this.close()
    }

    close = ()=>{
        this.props.close();
    }
}