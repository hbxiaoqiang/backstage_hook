import styled from 'styled-components';

export const ContentStyle = styled.div`
    padding: 1rem 0.8rem;
    background-color: #fff;
    font-size:${14/16}rem;
`;

export const ListStyle = styled.div`
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    .img{
        height:50px;
        width:50px;
        margin-right:0.75rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .registDate{
        color:#858585
    }
    .blue{
        color:#18b4ed
    }
    .textRt{
        text-align:right;
    }
    .textCt{
        text-align:center;
    }
`;