import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodoList from './TodoList';
import Container from './Container';
import reducer from './reducer';

const store = createStore(reducer);

class Todo extends React.Component {
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
      <Provider store= {store}>
        <div className='container'>
          <div className='columns'>
            <div className='column is-2'></div>
            <div className='column is-8'>
              <Container />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}




export default Todo
