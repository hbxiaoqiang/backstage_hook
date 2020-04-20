import React from 'react';
import { ListStyle } from './style';
import { Flex, FlexItem } from 'react-weui';

export default function List (props) {
    return (
        <ListStyle>
            <Flex>
                <FlexItem>
                    <img src={props.url} alt='' />
                    <p className="abs">{props.gameName}</p>
                </FlexItem>
                <FlexItem>
                    <div className='txt'>
                        <i>
                            {props.onlineNum}
                        </i>
                        <p>在线人数</p>
                    </div>
                </FlexItem>
                <FlexItem>
                    <div className='txt'>
                        <i>
                            {props.tableNum}
                        </i>
                        <p>桌数</p>
                    </div>
                </FlexItem>
                <FlexItem>
                    <div className='txt'>
                        <i>
                            {props.createNum}
                        </i>
                        <p>创局</p>
                    </div>
                </FlexItem>
            </Flex>
        </ListStyle>
    )
}