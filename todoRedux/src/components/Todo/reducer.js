const initialState = {
  todos: [],
  displayType: 'all'
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {text: action.payload, completed: false}],
      };
      case 'SET_VISIBILITY_FILTER' :
        return {
          ...state,
          displayType: action.displayType,
        }
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) => {
            if(index === action.index) {
              return {
                  ...todo,
                  completed: !todo.completed
              };
            }
            return todo;
          })
        };
    default:
  }
  return state;
}
