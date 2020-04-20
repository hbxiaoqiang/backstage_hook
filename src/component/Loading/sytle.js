import styled from 'styled-components';

export const LoadingStyle = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 99999;
    background: rgba(255, 255, 255, 0.4);
    .loader-inner{
        text-align: center;
        position: absolute;
        width: 100%;
        top: 50%;
        margin-top: -20px;
    }
    .ball-clip-rotate > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        border: 3px solid #868686;
        border-bottom-color: transparent;
        height: 30px;
        width: 30px;
        background: transparent !important;
        display: inline-block;
        -webkit-animation: rotate 0.75s 0s linear infinite;
        animation: rotate 0.75s 0s linear infinite;
    }
    @keyframes rotate {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`