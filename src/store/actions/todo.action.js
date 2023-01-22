export const todoAction = {
    add: (value) => {
        console.log("Action data:", value);
        return {
            payload: value, //Hello
            type: 'TODO_ADD'  //.TODO_ADD
        }
    },
    getAll: () => {
        return {
            type: 'TODO_GETALL'
        }
    },
    delete: (id) => {
        return {
            payload: id,
            type: 'TODO_DELETE'
        }
    }
} 
