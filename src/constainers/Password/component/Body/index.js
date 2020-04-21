import React, { useState } from 'react'
import { BodyStyle } from './style'
import { Form, FormCell, CellHeader, Label, CellBody, Input, ButtonArea, Button } from 'react-weui'

function Index(props){
    const [oldPW,setOldPW] = useState('');
    const [newPW,setNewPW] = useState('');

    const changeOldHandle = e => {
        setOldPW(e.target.value)
    }

    const changeNewHandle = e => {
        setNewPW(e.target.value)
    }

    const updateHandle = () => {
        props.updatePassword(oldPW,newPW)
    }

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
                            value={oldPW}
                            onChange={changeOldHandle}
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
                            value={newPW}
                            onChange={changeNewHandle}
                        />
                    </CellBody>
                </FormCell>
            </Form>
            <ButtonArea>
                <Button onClick={updateHandle}>修改</Button>
            </ButtonArea>
        </BodyStyle>
    )
}
export default Index
