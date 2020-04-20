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
                        <FlexItem>
                        <div className='Date list'>
                            日期
                        </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='From list'>
                                发起人(ID)
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='To list'>
                                玩家(ID)
                            </div>
                        </FlexItem>
                        <FlexItem>
                            <div className='Num list'>
                                数量(类型)
                            </div>
                        </FlexItem>
                    </Flex>
                </div>
                <div className='body'>
                    {
                        this.props.datas.length ?
                            this.props.datas.map((value, index) => {
                                return <List
                                    key={value.index}
                                    date={value.CreateTime.replace("T", " ").split(".")[0]}
                                    fromName={value.fromName}
                                    FromId={value.FromId}
                                    toName={value.toName}
                                    toId = { value.ToId }
                                    num={value.Cost}
                                    type={value.propName}
                                />
                            }) : <Nodata />

                    }
                </div>
            </ListStyle>
        );
    }
}

const List = (props) => {
    const {date,fromName,FromId,toName,toId,num,type} = props;
    return (
        <div className='item'>
            <Flex>
                <FlexItem>
                <div className='Date list'>
                    {date}
                        </div>
                </FlexItem>
                
                <FlexItem>
                    <div className='From list'>
                        {`${fromName}(${FromId})`}
                            </div>
                </FlexItem>
                <FlexItem>
                    <div className='To list'>
                    {`${toName}(${toId})`}
                            </div>
                </FlexItem>
                <FlexItem>
                    <div className='Num list'>
                    {`${num}(${type})`}
                            </div>
                </FlexItem>
            </Flex>
        </div>
    )
}

export default index;