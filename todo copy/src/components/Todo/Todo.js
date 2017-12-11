import React, {Component} from 'react';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter:'all'
    }
  }
  setVisibilityFilter= (filter) => {
    this.setState({filter});
  }
  render() {
    return(
      <div className='container'>
        <div className='columns'>
          <div className='column is-2'></div>
          <div className='column is-8'>
            <TodoList setVisibilityFilter={this.setVisibilityFilter} />
          </div>
        </div>
      </div>
    );
  }  
}




export default Todo
