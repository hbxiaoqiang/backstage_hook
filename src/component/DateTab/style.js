import styled from 'styled-components';

export const DateTabStyle = styled.div`
    text-align:center;
    color:#fff;
    .item{
            position: relative;
            padding:${10/16}rem 0;
            background-color: #4ad858;
            cursor:pointer;
        }
        .nav-on:after{
            content: "";
            height: 5px;
            width: 100%;
            position: absolute;
            background-color: #ff6a00;
            bottom: 0;
            left: 0;
        }
`