export const todoReducer = (state, action) => {
    if (state == undefined) {
        return [];
    }
    //action.payload = Hello
    //action.type = TODO_ADD
    console.log("Reducer",action);
    switch (action.type) {
        case 'TODO_ADD':
            return [...state, action.payload]
        case 'TODO_GETALL':
            return [...state]
        case 'TODO_DELETE':
            let item = state.find(item => item.id == action.payload);
            item.checked = !item.checked;
            return [...state]
        default:
            return state;
    }
}