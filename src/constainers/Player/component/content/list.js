import React, { Component } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { ListStyle } from './style';

export default class List extends Component {
    render() {
        return (
            <ListStyle>
                <Flex>
                    <div className='img'>
                        <img src={ this.props.imgUrl } alt='' />
                    </div>
                    <FlexItem>
                        <Flex>
                            <FlexItem>
                                <div className='registDate'>
                                    注册时间:
                                    {this.props.registDate}
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div className='textRt blue'>
                                    {
                                        this.props.typeName
                                    }
                                </div>
                            </FlexItem>
                        </Flex>
                        <div className='nickName'>
                            {
                                ` ${this.props.nickName}（ID:${this.props.id}）`
                            }
                        </div>
                        <div className='spreadName'>
                            推荐人：{
                                this.props.spreadName
                            }
                        </div>
                        <Flex>
                            <FlexItem>
                                <div className='fkcost'>
                                    房卡：{
                                        this.props.fangka
                                    }
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div className='textRt'>
                                    {
                                        `${this.props.fandian===-1 ?'' : ('返点：' + this.props.fandian) }
                                         积分：${this.props.jifen}
                                        `
                                    }
                                </div>
                            </FlexItem>
                        </Flex>
                        <div className='lastDate'>
                            最后游戏时间：{this.props.lastDate}
                        </div>
                        <Flex>
                            <FlexItem>
                                <div onClick={this.props.eidtFortune} className='fortune textCt blue'>
                                    {
                                        this.props.fortune
                                    }
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div onClick={this.props.delete} className='status textCt blue'>
                                    拉黑
                                </div>
                            </FlexItem>
                            <FlexItem>
                                <div onClick={ this.props.eidtSpread } className='textCt blue'>
                                    归属
                                </div>
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </ListStyle>
        )
    }
}