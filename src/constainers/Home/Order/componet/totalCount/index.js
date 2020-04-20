import React from 'react';
import { TotalCountStyle } from './style';
import { Flex,FlexItem } from 'react-weui';

function TotalCount(props) {
    return (
        <TotalCountStyle>
            <Flex>
                <FlexItem>
                    <i>
                        {
                            props.fangkaCost
                        }
                    </i>
                    <p>房卡消耗</p>
                </FlexItem>
                <FlexItem>
                    <i>
                        {
                            props.playerRech
                        }
                    </i>
                    <p>玩家充值</p>
                </FlexItem>
            </Flex>
        </TotalCountStyle>
    )
}

export default TotalCount;