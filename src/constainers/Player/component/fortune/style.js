import styled from 'styled-components';

export const FortuneStyle = styled.div`
    position:relative;
    .fortune-content{
        position:fixed;
        top:50%;
        left:50%;
        right:0;
        width:80%;
        margin-left: -40%;
        height:245px;
        margin-top:-122.5px;
        z-index: 1001;
        background: #fff;
        .title{
            line-height:40px;
            color:#18b4ed;
            text-align:center;
            border-bottom: solid 1px #eee;
        }
        input{
            width: 80%;
            margin-left: 10%;
            height: 36px;
            margin-top: 20px;
            border-radius: 8px;
            border-color: #18b4ed;
        }
        p{
            font-size: 12px;
            margin-top: 10px;
            text-align:center;
        }
        button{
            width: 40%;
            display: inline-block;
            text-align: center;
            height: 40px;
            line-height: 40px;
            /* margin: auto; */
            border-radius: 10px;
        }
        .cancel{
            color: #ff0000;
            border: solid 1px #ff0000;
            border-radius: 10px;
            margin-left: 8%;
        }
        .sure{
            color: #18b4ed;
            border: solid 1px #18b4ed;
            margin-left: 3%;
        }
    }
`