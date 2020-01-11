import React from 'react';

import { Container, Title } from './styles';
import TaskListComponent from '../../components/TaskListComponent'
import NewTask from '../../components/NewTask'

export default function TaskList() {

	const tasks = [
        { id: 1, text: 'task 1'},
        { id: 2, text: 'task 2'},
        { id: 3, text: 'task 3'}
    ]

	return (
		<Container>
			<Title className="list-title">To do List</Title>
			<TaskListComponent tasks={tasks} />
			<NewTask />
		</Container>
	);
}
