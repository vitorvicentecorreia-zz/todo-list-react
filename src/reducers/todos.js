const initialState = JSON.parse(localStorage.getItem('todos'))

const todos = (state = initialState, action) => {
    let localTasks = JSON.parse(localStorage.getItem('todos'))
    switch (action.type) {
        case 'ADD_TASK':
            const newTodo = {
                id: action.id,
                text: action.text,
                completed: false
            }
            localTasks ? localTasks.push(newTodo) : localTasks = [newTodo]
            localStorage.setItem('todos', JSON.stringify(localTasks))
            return [
                ...state,
                newTodo
            ]
        case 'TOGGLE_TASK':
            const completeTodo = (todos) => {
                return todos.map(todo => {
                    return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                })
            }
            localTasks = completeTodo(localTasks)
            localStorage.setItem('todos', JSON.stringify(localTasks))
            return completeTodo(state)
        case 'DELETE_TASK':
            const deleteTask = (tasks) => {
                return tasks.filter(todo => {
                    return todo.id !== action.id
                })
            }
            localTasks = deleteTask(localTasks)
            localStorage.setItem( 'todos',JSON.stringify(localTasks))
            return deleteTask(state)
        default:
            return state
    }
}

export default todos