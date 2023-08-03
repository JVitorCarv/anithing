import { styled } from "styled-components";

export const Title = styled.h1`
    color: white;
    font-size: 100px;
    font-family: 'Kanit', sans-serif;
    animation-iteration-count: infinite;
    animation-duration: 40s;
    animation-name: rgb_title;

    @keyframes rgb_title {
        from {
            filter: hue-rotate(0deg);
        }
        50% {
            filter: hue-rotate(360deg);
        }
        to {
            filter: hue-rotate(0deg);
        }
    }
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ResultContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 25px;
    align-items: center;
    margin: 0 100px;
    margin-bottom: 40px;
`

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`
