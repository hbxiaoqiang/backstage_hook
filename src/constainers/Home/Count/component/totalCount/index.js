import React from 'react';
import { TotalCountStyle } from './style';
import { Flex,FlexItem } from 'react-weui';

function TotalCount(props) {
    return (
        <TotalCountStyle>
            <Flex>
                <FlexItem onClick={props.goToPlayers}>
                    <i className='num'>
                        {props.register}
                    </i>
                    <p className=''>注册人数</p>
                </FlexItem>
                <FlexItem>
                    <i className='num'>{props.totalCount}</i>
                    <p className=''>创局总数</p>
                </FlexItem>
            </Flex>
        </TotalCountStyle>
    )
}
export default TotalCount;