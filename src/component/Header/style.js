import styled from 'styled-components';

const barHeight = 40 / 16;
const abs = { position: 'absolute' };

export const HeaderStyle = styled.div`
 height:${barHeight}rem;
    line-height:${barHeight}rem;
    color:#fff;
    background-color:#4ad858;
    position:fixed;
    top:0;
    left:0;
    z-index:99;
    width:100%;

    p{
        text-align:center;
    }

    .back-top{
        padding-left:${30 / 16}rem;
        padding-right:${20 / 16}rem;
        top:0;
        left:0;
        display:inline-block;
        height:${barHeight}rem;
        cursor:pointer;
        ${abs};
        :active{
            background:rgba(255,255,255,0.3)
        }
        :after {
            content:"";
            display:inline-block;
            height:${12 / 16}rem;
            width:${12 / 16}rem;
            border-width:0 0 3px 3px;
            border-style:solid;
            transform:matrix(0.71,0.71,-0.71,0.71,0,0);
            top:50%;
            margin-top:${-6 / 16}rem;
            left:${11 / 16}rem;
            ${abs};
        }

    }
    .other-btn {
        padding-left: ${20 / 16}rem;
        padding-right: ${30 / 16}rem;
        top: 0;
        right: 0;
        display:inline-block;
        height:${barHeight}rem;
        cursor:pointer;
        ${abs};
        :active{
            background:rgba(255,255,255,0.3)
        }
        :after{
            content: " ";
            display: inline-block;
            height: ${10 / 16}rem;
            width: ${10 / 16}rem;
            border-width: 0 3px 3px 0;
            border-color: #fff;
            border-style: solid;
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            ${abs};;
            top: 50%;
            margin-top:${-7 / 16}rem;
            right: ${11 / 16}rem;
        }
    }
`