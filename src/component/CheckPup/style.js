import styled from 'styled-components';

export const CheckStyle = styled.div`
    .content{
        position:fixed;
        z-index: 5000;
        width: 80%;
        max-width: 300px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #FFFFFF;
        text-align: center;
        border-radius: 3px;
        overflow: hidden;
        text-align:center;
        padding:20px;
        .img{
            padding-bottom:5px;
        }
        .gold{
            color:red
        }
    }
`;