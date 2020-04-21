import React from 'react';
import { Flex, FlexItem } from 'react-weui';
import { ListStyle } from './style';

export default function List(props){
    const {
        imgUrl,
        registDate,
        typeName,
        nickName,
        id,
        spreadName,
        fangka,
        fandian,
        jifen,
        lastDate,
        eidtFortune,
        fortune,
        delete:deleteUser,
        eidtSpread
    } = props;
    return (
        <ListStyle>
            <Flex>
                <div className='img'>
                    <img src={ imgUrl } alt='' />
                </div>
                <FlexItem>
                    <Flex>
                        <FlexItem>
                            <div className='registDate'>
                                注册时间:
                                {registDate}
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='textRt blue'>
                                {
                                    typeName
                                }
                            </div>
                        </FlexItem>
                    </Flex>
                    <div className='nickName'>
                        {
                            ` ${nickName}（ID:${id}）`
                        }
                    </div>
                    <div className='spreadName'>
                        推荐人：{
                            spreadName
                        }
                    </div>
                    <Flex>
                        <FlexItem>
                            <div className='fkcost'>
                                房卡：{
                                    fangka
                                }
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='textRt'>
                                {
                                    `${fandian===-1 ?'' : ('返点：' + fandian) }
                                     积分：${jifen}
                                    `
                                }
                            </div>
                        </FlexItem>
                    </Flex>
                    <div className='lastDate'>
                        最后游戏时间：{lastDate}
                    </div>
                    <Flex>
                        <FlexItem>
                            <div onClick={eidtFortune} className='fortune textCt blue'>
                                {
                                    fortune
                                }
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div onClick={deleteUser} className='status textCt blue'>
                                拉黑
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div onClick={ eidtSpread } className='textCt blue'>
                                归属
                            </div>
                        </FlexItem>
                    </Flex>
                </FlexItem>
            </Flex>
        </ListStyle>
    )
}