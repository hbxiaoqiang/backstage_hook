import React from 'react'
import { BodyStyle } from './style'
import { Cells, Cell, CellBody, CellFooter } from 'react-weui'

export default function index(props) {
    const {totalData:{adCount,recharge}} = props;
    return (
        <BodyStyle>
            <Cells>
                <Cell>
                    <CellBody>广告费总额：</CellBody>
                    <CellFooter>
                        {adCount}
                    </CellFooter>
                </Cell>
                <Cell>
                    <CellBody>充值总额：</CellBody>
                    <CellFooter>
                        {recharge}
                    </CellFooter>
                </Cell>
            </Cells>
        </BodyStyle>
    )
}

