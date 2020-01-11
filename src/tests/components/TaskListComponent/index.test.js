import React from 'react'
import { shallow } from 'enzyme'

import TaskListComponent from '../../../components/TaskListComponent'

it('Testar renderização do componente de lista de tarefas', () => {
    const tasks = [
        { id: 1, text: 'task 1'},
        { id: 2, text: 'task 2'}
    ]
    const component = shallow(<TaskListComponent tasks={tasks} />)
    expect(component).toMatchSnapshot();
})