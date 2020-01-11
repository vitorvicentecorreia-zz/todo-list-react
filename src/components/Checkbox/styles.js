import styled from 'styled-components';

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