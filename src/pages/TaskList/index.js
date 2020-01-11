import React from 'react';

import { Container, Title } from './styles';
import TaskListComponent from '../../components/TaskListComponent'
import NewTask from '../../components/NewTask'

import { addTask, toggleTask, deleteTask } from '../../actions'

import { useDispatch, useSelector } from "react-redux";

export default function TaskList() {

	const tasks = useSelector(state => state.todos)
	const dispatch = useDispatch()

	return (
		<Container>
			<Title className="list-title">To do List</Title>
			<TaskListComponent 
				toggleTask={(id) => dispatch(toggleTask(id))} 
				deleteTask={(id) => dispatch(deleteTask(id))}
				tasks={tasks} />
			<NewTask addTask={(text) => dispatch(addTask(text))} />
		</Container>
	);
}
