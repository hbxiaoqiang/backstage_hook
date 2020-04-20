import styled from 'styled-components';

export const Footer = styled.div`
    position:fixed;
    z-index:99;
    bottom:0;
    width:100%;
    border-top:1px solid #d3d3d3;
    text-align:center;
    background-color:#efefef;
    a{
        display:block;
        width:100%;
        color:#858585;
        padding:10px 0
    }
    a.active{
        color:#18b4ed;
    }

    a i{
        font-size:${20/16}rem;
    }

    a p{
        font-size:${14/20}rem;
    }`