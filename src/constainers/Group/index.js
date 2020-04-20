import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selector } from '../../redux/modules/group';
import { GroupStyle } from './style';
import Header from '../../component/Header';
import {
    SearchBar, Button, ButtonArea, Form, CellHeader,
    FormCell, CellBody, Input, Label
} from 'react-weui';

function Group(props){
    const {
        actions:groupActions,
        history,
        groupId,
        days,
        winMult,
        loseMult
    } = props;
    const changeGroupId = value => {
        groupActions.changeGroupId(value)
    }

    const changeDays = e => {
        groupActions.changeDays(e.target.value)
    }

    const changeWinMult = e => {
        groupActions.changeWinMult(e.target.value)
    }

    const changeLoseMult = e => {
        groupActions.changeLoseMult(e.target.value)
    }

    return (
        <GroupStyle>
            <Header 
             title = '工会配置'
             backHandle={history.goBack}
            />
            <SearchBar
                onChange={changeGroupId}
                defaultValue={groupId}
                placeholder={'搜索'}
                lang={
                    {
                        cancel: '取消'
                    }
                }
                onSubmit={groupActions.searchGroup}
            />
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>时间：</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type='text'
                            value={days}
                            onChange={changeDays}
                        />
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>胜利：</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type='text'
                            value={winMult}
                            onChange={changeWinMult}
                            placeholder='请输入倍数'
                        />
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>失败：</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type='text'
                            value={loseMult}
                            onChange={changeLoseMult}
                            placeholder='请输入倍数'
                        />
                    </CellBody>
                </FormCell>
            </Form>
            <ButtonArea>
                <Button
                 onClick={ groupActions.updateControl }
                >确定</Button>
            </ButtonArea>
            <p className='des'>注：在设置的时间内，输赢倍数不能超过底分*倍数</p>
        </GroupStyle>
    );
}

const mapStateToProps = state => ({
    groupId: selector.getGoupId(state),
    days: selector.days(state),
    winMult: selector.winMult(state),
    loseMult: selector.loseMult(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Group);