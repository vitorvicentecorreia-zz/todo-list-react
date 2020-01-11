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
export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`
export const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: transparent;
    border-radius: 3px;
    transition: all 150ms;
    border: 1px solid #cccccc;

`
export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Icon = styled.svg`
  fill: none;
  stroke: #b617ea;
  stroke-width: ${props => props.checked ? '2px' : '0px'};
`

export const Trash = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
