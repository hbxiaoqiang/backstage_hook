import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BindMobileStyle } from './style';
import Header from '../../component/Header';
import From from './component/Form';
import CheckPup from '../../component/CheckPup';
import config from '../../config';
import { actions, selector } from '../../redux/modules/bindMObile'

function BindMobile(props) {
    const {
        history: { goBack },
        playerInfo: { NickName, UserId },
        actions: { updateMobile, getUserInfo, closeChcekPup }
    } = props;
    
    const headImgStr = useMemo(() => {
        return config.serverIp + config.imgPath + UserId + ".jpg"
    }, [UserId])

    return (
        <BindMobileStyle>
            <Header
                title='绑定手机'
                backHandle={goBack}
            />
            <From
                bindMobile={updateMobile}
                checkUserInfo={getUserInfo}
            />

            {
                NickName ?
                    <CheckPup
                        headimg={headImgStr}
                        nickname={NickName}
                        close={closeChcekPup}
                    /> :
                    null
            }
        </BindMobileStyle>
    );
}
const mapStateToProps = state => ({
    playerInfo: selector.getPlayerInfo(state)
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(BindMobile);