import React, { useState,useCallback } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { DateTabStyle } from './style';
import { getDateStr } from '../../until/tools';
const nav = [
    {
        id: 1,
        text: '今日'
    },
    {
        id: 2,
        text: '昨日'
    },
    {
        id: 3,
        text: '本周'
    },
    {
        id: 4,
        text: '本月'
    },
    {
        id: 5,
        text: '上月'
    },
    {
        id: 6,
        text: '自定义'
    }
]

function DateTab(props){
    const [selected,setSelected] = useState(1);
    const [diy,setDiy] = useState(false);
    const { getData , diy:propsDiy } = props;
    const clickEvent = useCallback((id) => {
        switch (id) {
            case 1:
                let curDate = getDateStr.CurDate();
                getData(curDate, curDate);
                break;
            case 2:
                let yesDay = getDateStr.AddDay(-1);
                getData(yesDay, yesDay)
                break;
            case 3:
                getData(getDateStr.getWeekOnDay(), getDateStr.CurDate())
                break;
            case 4:
                getData(getDateStr.getMothOnDay(), getDateStr.CurDate())
                break;
            case 5:
                let month = getDateStr.getPreMonth()
                getData(month[0], month[1])
                break;
            default:
                propsDiy(!diy)
                setDiy(!diy)
               
        }
        if(selected !== id){
            setSelected(id)
            setDiy(false)
        }
    },[getData,diy,propsDiy,selected])

    return (
        <DateTabStyle>
            <Flex>
                {
                    nav.map((value) => {
                        return (
                            <FlexItem
                                key={value.id}
                                onClick={() => { clickEvent(value.id) }}
                            >
                                <div className={'item ' + (selected === value.id?'nav-on':'')}>
                                    { value.text }
                                </div>
                            </FlexItem>
                        )
                    })
                }
            </Flex>
        </DateTabStyle>
    )
}

export default DateTab;