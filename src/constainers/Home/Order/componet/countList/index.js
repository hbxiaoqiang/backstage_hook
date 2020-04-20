import React  from 'react';
import { CountListStyle } from './style';
import List from './list';
import config from '../../../../../config';

const headImgPath = id => {
    return config.serverIp + config.imgPath + id + '.jpg';
}

const typeName = typeId =>{
    return config.userTypeName[typeId]
}

function CountList(props) {
    return (
        <CountListStyle>
            {
                props.counts.map((value,index)=>{
                    return <List 
                        key={index}
                        url={headImgPath(value.UserId)}
                        nickName={value.NickName}
                        userId={value.UserId}
                        typeName={typeName(value.TypeId)}
                        gamerCount={value.GamerCount}
                        recharge={value.Total}
                        spreadName={value.SpreadName}
                        gold={value.Gold}
                        cost={value.Cost || 0 }
                    />
                })
            }
        </CountListStyle>
    )
}

export default CountList