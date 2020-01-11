import styled from 'styled-components';

export const TaskList = styled.ul`
    width: 100%;
    height: 70%; 
    overflow-y: auto;
`
export const ListItem = styled.li`
    margin: 10px auto;
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ItemText = styled.div`
    font-size: 16px;
    font-weight: bold;
    width: 90%;
    display: flex;
    align-items: center;

    ${props => props.completed && `
        color: #d4d4d4;
        text-decoration: line-through;
        text-decoration-thickness: 10px;
    `} 
`

export const Trash = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
