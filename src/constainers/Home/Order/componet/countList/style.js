import styled from 'styled-components';

export const CountListStyle = styled.div`
    background-color:#fff;
    margin-top:5px;
    padding: ${10/16}rem 0.5rem;
`;

export const ListStyle = styled.div`
    font-size:${14/16}rem;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    .img{
        width:${60/16}rem;
        height:${60/16}rem;
        margin-right:10px;
        img{
            width:100%;
            height:100%;
        }
    }
    .org{
        color:#ff6a00
    }
    .peopleNum{
        color:#18b4ed
    }
    .right-aglin{
        text-align:right;
    }
`;