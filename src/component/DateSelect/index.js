import React, { useState,useCallback } from 'react';
import { Form, FormCell, CellHeader, Label, CellBody, Input, ButtonArea, Button, Dialog } from 'react-weui';
import { DateSelectStyle } from './style';


function DateSelect(props){
    const [startTime,setStartTime] = useState('');
    const [endTime,setEndTime] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const { active,getData } = props;

    const alertClick = useCallback(() => {
        setErrMsg('')
    },[])

    const clickHandle = useCallback(() => {
        let errMsg = '';
        if (!startTime || !endTime) {
            errMsg = "请完整选择日期";
        }
        else if (startTime > endTime) {
            errMsg = "开始日期不能大于结束日期";
        }
        if (errMsg) {
            setErrMsg(errMsg)
        } else {
            getData(startTime, endTime)
        }
    },[startTime,endTime,getData]);

    const stHandle = useCallback((e) => {
        setStartTime(e.target.value)
    },[])

    const edHandle = useCallback((e) => {
        setEndTime(e.target.value)
    },[])

    return (
        <DateSelectStyle>
            <div className={'from ' + (active ? 'active' : '')}>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>开始日期</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='date'
                                value={startTime}
                                onChange={stHandle}
                            />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>结束日期</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type='date'
                                value={endTime}
                                onChange={edHandle}
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button href="#!" onClick={clickHandle}>确定</Button>
                </ButtonArea>
            </div>
            {
                errMsg ? (
                    <Dialog type='ios' title='提示' buttons={[
                        {
                            label: '确定',
                            onClick: alertClick
                        }
                    ]} show={true}>
                        {errMsg}
                    </Dialog>
                ) : null
            }
        </DateSelectStyle>
    )
}

export default DateSelect;