import React, { Component } from 'react';
import { ActionSheet } from 'react-weui'
import config from '../../../../config';

export default class TypeSelect extends Component{
    constructor(props){
        super(props);
        const initMenus = function(fn){
            let menus = [];
            for( let key in config.userTypeName){
                menus.push({
                    label:config.userTypeName[key],
                    onClick:()=>{fn(key)}
                })
            }
            return menus;
        }
        this.state = {
            menus:initMenus(this.menuClickHandle),
            actions:[
                {
                    label: 'Cancel',
                    onClick: this.closeHandle
                }
            ]
        }
    }
    render(){
        
        return (
            <ActionSheet
            type='android'
            show = { this.props.show }
            menus = { this.state.menus }
            actions={ this.state.actions }
            onRequestClose={this.closeHandle}
            />
        )
    }

    menuClickHandle = (typeId)=>{
        this.props.requsetData(typeId)
        this.closeHandle()
    }

    closeHandle = ()=>{
        this.props.close()
    }
}