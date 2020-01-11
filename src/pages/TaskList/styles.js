import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const Title = styled.h1`
    height: 15%;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`

export const ButtonNewTask = styled.button`
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 50%;
    color: white;
    background-color: #b617ea;
    font-size: 40px;
    position: fixed;
    bottom: 25px;
    right: 25px;
    outline: none;
    cursor: pointer;
`