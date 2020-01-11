import styled from 'styled-components';

export const Container = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputNewTask = styled.input`
    border: 1px solid #e0e0e0;
    width: 70%;
    height: 50px;
    margin-right: 3%;
    outline: none;
    font-size: 17px;
    font-weight: bold;
    padding-left: 10px;
    color: #5f5f5f;
`

export const ButtonNewTask = styled.button`
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 50%;
    color: white;
    background-color: #b617ea;
    font-size: 40px;
    outline: none;
    cursor: pointer;
`
