import React from 'react';
import { Flex, FlexItem } from 'react-weui';
import { TabStyle } from './style'
import {  Link } from 'react-router-dom';

function Tab(){
    return (
        <TabStyle>
            <Flex>
                <FlexItem>
                    <div href='!#' className='tab active'>
                        赠送房卡
                    </div>
                </FlexItem>
                <FlexItem>
                    <Link to='/RecordCost/record' className='tab'>
                        房卡记录
                    </Link>
                </FlexItem>
                <FlexItem>
                    <Link to='/RecordCost/give'  className='tab'>
                        赠送记录
                    </Link>
                </FlexItem>
                <FlexItem>
                    <Link to='/RecordCost/recharge'  className='tab'>
                        充值记录
                    </Link>
                </FlexItem>
            </Flex>
        </TabStyle>
    )
}

export default Tab;