import React from 'react';
import { LineTit } from './style'

function LineTitle(props) {
    return (
        <LineTit>
            {
                props.titleTxt
            }
        </LineTit>
    )
}

export default LineTitle