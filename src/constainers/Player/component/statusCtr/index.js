import React from 'react';
import { Dialog } from 'react-weui';

function statusCtr(props) {
    return (
        <Dialog
            type="ios"
            title='请确认'
            buttons={[
                {
                    type: 'default',
                    label: '取消',
                    onClick: props.cancel
                },
                {
                    type: 'primary',
                    label: '确定',
                    onClick: ()=>{props.sureFn(props.id)}
                }
            ]}
            show={true}>
                {`ID:${props.id} 确认要$props.tip}`}
        </Dialog>
    )
}

export default statusCtr