export const addTodo = payload => ({type:'ADD_TODO', payload});
export const setVisibilityFilter = displayType => ({type: 'SET_VISIBILITY_FILTER', displayType});
export const toggleTodo = index => ({type: 'TOGGLE_TODO', index});
