import styled from 'styled-components';

export const TabStyle = styled.div`
    text-align:center;
    .tab{
        background-color:#fff;
        border-right:1px solid #ededed;
        border-bottom: 3px #ededed solid;
        display:block;
        line-height:50px;
        width:100%;
        font-size:${14/16}rem
    }
    .active{
        background: #ededed;
        border-bottom: 3px #ff0000 solid;
    }
`;