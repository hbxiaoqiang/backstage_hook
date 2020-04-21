import React, { useCallback,useState } from 'react';
import { ActionSheet } from 'react-weui'
import config from '../../../../config';

function TypeSelect(props){
    const {
        show,
        requsetData,
        close
    }=props;

    const initMenus = useCallback((fn)=>{
        let menus = [];
            for( let key in config.userTypeName){
                menus.push({
                    label:config.userTypeName[key],
                    onClick:()=>{fn(key)}
                })
            }
        return menus;
    },[])
    
    const closeHandle = ()=>{
        close()
    }

    const menuClickHandle = (typeId)=>{
        requsetData(typeId)
        closeHandle()
    }

    const [stateMenus] = useState(initMenus(menuClickHandle));
    const [stateActions] = useState([
        {
            label: 'Cancel',
            onClick: closeHandle
        }
    ]);

    return (
        <ActionSheet
        type='android'
        show = { show }
        menus = { stateMenus }
        actions={ stateActions }
        onRequestClose={closeHandle}
        />
    )

}

export default TypeSelect;