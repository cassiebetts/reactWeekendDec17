import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      displayType: this.props.filter,
      todos: [],
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const trimmed = this.state.inputText.trim();
    if(trimmed.lenght>0){
      this.addTodo(trimmed);
      this.setState({
        inputText: ''
      });
      console.log('onSubmit')
    }
  }

  addTodo = text => {
    this.setState({
      todos: [...this.state.todos, {text, completed: false}],
    });
  };

  handleOnChange = event => {
    const key = event.target.value;
      this.setState({
        inputText: key,
      });
    };

  remove(id){

  }

  toggle(id) {
    const newTodos = this.state.todos.map((item, index) => {
      if(index===id){
        return Object.assign(item, {
          completed: !item.completed
        })
      }
      return item;
    })
    this.setState({todos: newTodos})
  }

  renderTodoList(){
    let filteredList = [];

    switch (this.props.filter) {
      case 'active':
      filteredList = filteredList = this.state.todos.filter(item => !item.completed);
      break;
      case 'completed':
      filteredList = this.state.todos.filter(item => item.completed);
      break;
      default:
      filteredList= [...this.state.todos];
    }

    return this.state.todos.map((item, index) => (
      <TodoItem
      toggle={() => this.toggle(index)}
      remove={() => this.remove(index)}
      item={item}
      key={index}/>
    ))
  }



  render () {
    return (
      <section className='section'>
      <div className='section'>
      <div>
      <form onSubmit={this.onSubmit} className='columns'>
      <div className='column is-four-fifths'>
      <input
      type='text'
      className='input column'
      placeholder='Add a Todo'
      value={this.state.inputText}
      onChange={this.handleOnChange}
      maxLength={20}/>
      </div>
      <div className='column has-text-left'>
      <span className='icon has-text-primary fa fa-2x' onClick={this.onSubmit}>
      <i className='fa fa-plus' />
      </span>
      </div>
      </form>
      </div>
      <div>
      {this.renderTodoList()}
      </div>
      </div>
      <footer className='footer'>
      <div className='constent has-text-centered'>
      <button className='button' onClick={()=> this.props.setVisibilityFilter('All')}>
      All
      </button>
      <button className='button' onClick={()=> this.props.setVisibilityFilter('Completed')}>
      Completed
      </button>
      <button className='button' onClick={()=> this.props.setVisibilityFilter('Active')}>
      Active
      </button>

      </div>

      </footer>

      </section>
    );
  }
}
