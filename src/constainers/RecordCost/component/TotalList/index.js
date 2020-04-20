import React, { Component } from 'react';
import { ListStyle } from './style';
import { Flex, FlexItem } from 'react-weui';
import Nodata from '../../../../component/Nodata';
class index extends Component {
    render() {
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
                        <div className='num list'>
                            金额
                        </div>
                    </Flex>
                </div>
                <div className='body'>
                    {
                        this.props.datas.length ?
                            this.props.datas.map((value,index) => {
                                return <List 
                                key={ value.index }
                                id={value.FromId}
                                name={ value.fromName }
                                date={ value.CreateTime.replace("T", " ").split('.')[0] }
                                num={ value.Cost }
                                propName = { value.propName }
                                />
                            }):<Nodata />

                    }
                </div>
            </ListStyle>
        );
    }
}

const List = (props) => {
    return (
        <div className='item'>
            <Flex>
                <div className='ID list'>
                    {props.id}
                </div>
                <FlexItem>
                    <div className='player list'>
                        {props.name}
                    </div>
                </FlexItem>
                <FlexItem>
                    <div className='order list'>
                        {props.date}
                    </div>
                </FlexItem>
                <div className='num list'>
                    {`${props.num}(${props.propName})`}
                </div>
            </Flex>
        </div>
    )
}

export default index;