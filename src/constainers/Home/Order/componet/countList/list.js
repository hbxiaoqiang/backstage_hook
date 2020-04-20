import React from 'react';
import { ListStyle } from './style';
import { Flex, FlexItem } from 'react-weui';

function List(props) {
    return (
        <ListStyle>
            <Flex>
                <div className='img'>
                    <img src=
                        {
                            props.url
                        }
                        alt='' />
                </div>
                <FlexItem>
                    <Flex>
                        <FlexItem>
                            <div>
                                {
                                    `${props.nickName}（ID：${props.userId}）
                                    [${props.typeName}]
                                    `
                                }
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='peopleNum right-aglin'>
                                {props.gamerCount}人
                            </div>
                        </FlexItem>
                    </Flex>
                    <Flex>
                        <FlexItem>
                            <div>
                                玩家充值：
                                <span className='org'>
                                    {
                                        props.recharge
                                    }
                                </span>
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='right-aglin'>
                                推荐人：
                                {
                                    props.spreadName
                                }
                            </div>
                        </FlexItem>
                    </Flex>
                    
                    <Flex>
                        <FlexItem>
                            <div>
                                房卡余额：
                                {
                                        props.gold
                                    }
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='right-aglin'>
                                房卡总消耗：
                                <span className='org'>
                                {
                                    props.cost
                                }
                                </span>
                            </div>
                        </FlexItem>
                    </Flex>
                </FlexItem>
            </Flex>
        </ListStyle>
    )
}

export default List;