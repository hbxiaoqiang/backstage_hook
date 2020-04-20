import styled from 'styled-components';

export const Header = styled.div`
    padding-top: ${8/16}rem;
    padding-bottom:${8/16}rem;
    background-color: #000000;
    background-image: -webkit-linear-gradient(left,#4ad858,#34c577);
    background-image: linear-gradient(left,#4ad858,#34c577);
    /* border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%; */
    position: relative;

    .welcome{
        left: 5px;
        top: ${8/16}rem;
        font-size: ${20/16}rem;
        color:#fff;
        text-align: center;
    }

    .exit-login{
        right: ${8/16}rem;
        top: ${8/16}rem;
        text-decoration: underline;
        color: #ff6a00;
        font-size: ${14/16}rem;
        position: absolute;
        cursor:pointer;
    }

    .userInfo{
        text-align:center;
        color:#fff;
        p{
            margin:0.5rem 0;
            img{
                width:60px;
                height:60px;
                border-radius:50%;
                border:2px solid #fff;
            }
            span{
                background-color:#ff0000;
                border-radius:50px;
                padding:3px 10px;
                font-size:${12/16}rem;
            }
        }
    }
`