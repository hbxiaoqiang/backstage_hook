import styled from 'styled-components';

export const BodyStyle = styled.div`
    font-size:${12/16}rem;
    .header,.item{
        border-bottom:1px #ccc solid;
    }
    text-align:center;
    .list{
        padding:0.7rem 0;
    }
    .ID{
        width:${60/16}rem
    }
    .ID,.cost,.date{
        background-color:#f8f8f8
    }
    .agree{
        color:green;
    }
    .oppose{
        color:red;
    }
`;