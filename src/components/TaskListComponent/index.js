import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

import { TaskList, ListItem, CompletedContainer, ItemText, Trash } from './styles';
import Checkbox from '../Checkbox'


export default function TaskListComponent(props) {

	return (
        <TaskList>
            {props.tasks && props.tasks.map((task) => (
                <ListItem key={task.id}>
                    <CompletedContainer 
                        onClick={() => props.toggleTask(task.id)}
                        onTouchStart={() => props.toggleTask(task.id)}>
                        <ItemText completed={task.completed}>{task.text}</ItemText>
                        <Checkbox completed={task.completed} />
                    </CompletedContainer>
                    <Trash 
                        onClick={() => props.deleteTask(task.id)}
                        onTouchStart={() => props.deleteTask(task.id)}>
                        <FaRegTrashAlt color="#b617ea" /> 
                    </Trash>
                </ListItem>
            ))}
        </TaskList>
	);
}
