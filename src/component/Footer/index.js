import React,{ memo } from 'react';
import { Flex, FlexItem } from 'react-weui';
import { Footer as FooterTab } from './style';
import { footerNav } from '../../config';
const Footer = memo(function(props) {
    const {page,curPage} = props;
    return(
        <FooterTab>
            <Flex>
                {
                    Object.values(footerNav).map((value,index)=>{
                        return (
                    <FlexItem key={index}>
                        <a href='#!'
                         onClick={
                            (e)=>{
                                e.preventDefault();
                                page(value.page)
                            }
                        }
                         className={
                            curPage === value.page?'active':''
                        }>
                            <i className={value.ico}></i>
                            <p>{value.name}</p>
                        </a>
                    </FlexItem>
                        )
                    })
                }
            </Flex>
        </FooterTab>
    )
})

export default Footer;