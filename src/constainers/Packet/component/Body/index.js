import React, { Component } from 'react';
import { BodyStyle } from './style';
import { Flex, FlexItem } from 'react-weui';
import config from '../../../../config';
import Nodata from '../../../../component/Nodata';

class index extends Component {
    render() {
        return (
            <BodyStyle>
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
                            <div className='cost list'>
                                金额
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='status list'>
                                状态
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='date list'>
                                日期
                            </div>
                        </FlexItem>
                    </Flex>
                </div>
                <div className='body'>
                    {
                        this.props.datas.length>0?
                        this.props.datas.map(value => {
                            const status = config.cashText[value.Status];
                            const cost = value.Content.split("：")[1].replace(/[^0-9]/ig, "");
                            const date = value.CreateTime.replace("T", " ")
                            return <List 
                            key = { value.Id }
                            userId = { value.FromId }
                            name = { value.fromName }
                            cost = {cost}
                            status = { status }
                            date = { date }
                            />
                        }):<Nodata />
                    }
                </div>
            </BodyStyle>
        );
    }
}

const List = (props) => {
    const { userId, name, cost, status, date } = props;
    return (
        <div className='item'>
            <Flex>
            <div className='ID list'>
                {userId}
            </div>
            <FlexItem>
                <div className='player list'>
                    {name}
                </div>
            </FlexItem>
            <FlexItem>
                <div className='cost list'>
                    {cost}
                </div>
            </FlexItem>
            <FlexItem>
                <div className='status list'>
                    {status}
                </div>
            </FlexItem>
            <FlexItem>
                <div className='date list'>
                    {date.split(".")[0].substr(5,11)}
                </div>
            </FlexItem>
        </Flex>
        </div>
    )
}

export default index;