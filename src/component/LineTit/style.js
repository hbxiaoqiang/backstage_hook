import styled from 'styled-components'

export const LineTit = styled.div`
    margin: 0.8rem 0;
    padding: 0.3rem 0;
    text-indent: 1rem;
    position: relative;
    :before {
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0094ff;
    }
`