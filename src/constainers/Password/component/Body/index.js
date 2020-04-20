import React, { Component } from 'react'
import { BodyStyle } from './style'
import { Form, FormCell, CellHeader, Label, CellBody, Input, ButtonArea, Button } from 'react-weui'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            old:'',
            new:''
        }
    }
    render() {
        return (
            <BodyStyle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>
                                旧密码：
                            </Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='text'
                                value={this.state.old}
                                onChange={this.changeOldHandle}
                            />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>
                                新密码：
                            </Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='text'
                                value={this.state.new}
                                onChange={this.changeNewHandle}
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.updateHandle}>修改</Button>
                </ButtonArea>
            </BodyStyle>
        )
    }

    changeOldHandle = e => {
        this.setState({
            old:e.target.value
        })
    }

    changeNewHandle = e => {
        this.setState({
            new:e.target.value
        })
    }

    updateHandle = () => {
        this.props.updatePassword(this.state.old,this.state.new)
    }
}
