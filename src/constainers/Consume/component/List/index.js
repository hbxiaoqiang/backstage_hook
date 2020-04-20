import React from 'react';
import { ListStyle } from './style';
import { Flex, FlexItem } from 'react-weui';
import Nodata from '../../../../component/Nodata';
function Index(props) {
    const { datas } = props;
    return (
        <ListStyle>
            <div className='header'>
                <Flex>
                    <div className='ID list'>
                        ID
                    </div>
                    <FlexItem>
                        <div className='player list'>
                            玩家
                        </div>
                    </FlexItem>
                    <FlexItem>
                        <div className='order list'>
                            充值时间
                        </div>
                    </FlexItem>
                    <div className='moneny list'>
                        金额
                    </div>
                </Flex>
            </div>
            <div className='body'>
                {
                    datas.length ?
                    datas.map(value => {
                            return <List 
                            key={ value.Id }
                            id={value.Id}
                            name={ value.NickName }
                            date={ value.PayTime.replace("T", " ").split('.')[0] }
                            cost={ value.Total }
                            />
                        }):<Nodata />

                }
            </div>
        </ListStyle>
    );
}

const List = (props) => {
    const {id,name,date,cost} = props;
    return (
        <div className='item'>
            <Flex>
                <div className='ID list'>
                    {id}
                </div>
                <FlexItem>
                    <div className='player list'>
                        {name}
                    </div>
                </FlexItem>
                <FlexItem>
                    <div className='order list'>
                        {date}
                    </div>
                </FlexItem>
                <div className='moneny list'>
                    {cost}
                </div>
            </Flex>
        </div>
    )
}

export default Index;