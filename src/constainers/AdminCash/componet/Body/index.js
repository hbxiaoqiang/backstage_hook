import React from 'react';
import { BodyStyle } from './style'
import { Flex, FlexItem } from 'react-weui';
import Nodata from '../../../../component/Nodata';
function Index(props){
    const { datas,updateFn } = props;
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
                        <div className='list'>
                            审批
                        </div>
                    </FlexItem>
                </Flex>
            </div>
            <div className='body'>
                {
                    datas.length > 0 ?
                    datas.map(value => {
                            // return List(value.Id, value.FromId, value.fromName,
                            //     value.Content || 0, value.IsWechat,
                            //     this.props.updateFn)
                            return <List 
                            key={ value.Id }
                            id={ value.Id }
                            userId={ value.FromId }
                            name={ value.fromName }
                            cost={ value.Content || 0 }
                            isWechat={ value.IsWechat }
                            updateFn= { updateFn }
                            />
                        }) : <Nodata />
                }
            </div>
        </BodyStyle>
    );
}

const List = (props) => {
    const {id, userId, name, cost, isWechat, updateFn}=props;
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
                    <div className='list'>
                        <span className='agree' onClick={() => { updateFn(`[${id}]`, 3, isWechat) }}> 同意 </span> |
                <span className='oppose' onClick={() => { updateFn(`[${id}]`, 2, isWechat) }}> 驳回 </span>
                    </div>
                </FlexItem>
            </Flex>
        </div>
    )
}

export default Index;