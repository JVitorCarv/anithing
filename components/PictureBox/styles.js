import { styled } from "styled-components";

export const PicturePreview = styled.div`
    width: 500px;
    height: 500px;
    background-image: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 25px;
    margin-bottom: 30px;
    border: 10 px solid red;
    
`

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    margin-bottom: 30px;
    transition: 0.5s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const SearchButton = styled.button`
    border: none;
    opacity: 1;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`