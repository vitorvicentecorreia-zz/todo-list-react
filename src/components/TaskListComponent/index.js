import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

import { TaskList, ListItem, ItemText, CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon, Trash } from './styles';


export default function TaskListComponent(props) {

	return (
        <TaskList>
            {props.tasks && props.tasks.map((task) => (
                <ListItem key={task.id}>
                    <ItemText completed={true}>{task.text}</ItemText>
                    <CheckboxContainer>
                        <HiddenCheckbox />
                        <StyledCheckbox>
                            <Icon checked={true} viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12" />
                            </Icon>
                        </StyledCheckbox>
                    </CheckboxContainer>
                    <Trash>
                        <FaRegTrashAlt color="#b617ea" /> 
                    </Trash>
                </ListItem>
            ))}
        </TaskList>
	);
}
