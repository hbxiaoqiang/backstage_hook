import React, { Component } from 'react';
import { Dialog } from 'react-weui';

export default class statusCtr extends Component {
    render() {
        return (
            <Dialog
                type="ios"
                title='请确认'
                buttons={[
                    {
                        type: 'default',
                        label: '取消',
                        onClick: this.props.cancel
                    },
                    {
                        type: 'primary',
                        label: '确定',
                        onClick: ()=>{this.props.sureFn(this.props.id)}
                    }
                ]}
                show={true}>
                    {`ID:${this.props.id} 确认要${this.props.tip}`}
            </Dialog>
        )
    }
}