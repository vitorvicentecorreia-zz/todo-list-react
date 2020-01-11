export const addTask = text => ({
    id: new Date().getTime(),
    text,
    type: 'ADD_TASK'
})

export const deleteTask = id => ({
    id,
    type: 'DELETE_TASK'
})

export const toggleTask = id => ({
    id,
    type: 'TOGGLE_TASK'
})