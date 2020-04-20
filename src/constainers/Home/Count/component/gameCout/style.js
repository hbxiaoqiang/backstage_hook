import styled from 'styled-components';

export const GameCountStyle = styled.div`

`;

export const ListStyle = styled.div`
    background-color:#fff;
    text-align:center;
    margin-top:0.3rem;
    .weui-flex__item{
        position:relative;
    }
    .txt{
        padding-top:1rem;
    }
    .abs{
        position:absolute;
        right: 10px;
        bottom: 0;
        font-size: ${20/16}rem;
        color: #ff6a00;
        font-weight: bold;
    }
    img{
        vertical-align: middle;
        width:100%;
        margin-top: 0.5rem
    }
    i{
        font-size:2rem;
        color:#ff6a00;
    }
`;