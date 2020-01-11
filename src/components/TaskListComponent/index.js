import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

import { TaskList, ListItem, ItemText, Trash } from './styles';
import Checkbox from '../Checkbox'


export default function TaskListComponent(props) {

	return (
        <TaskList>
            {props.tasks && props.tasks.map((task) => (
                <ListItem key={task.id}>
                    <ItemText completed={true}>{task.text}</ItemText>
                    <Checkbox />
                    <Trash>
                        <FaRegTrashAlt color="#b617ea" /> 
                    </Trash>
                </ListItem>
            ))}
        </TaskList>
	);
}
