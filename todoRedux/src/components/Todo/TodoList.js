import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      displayType: 'all',
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const trimmed = this.state.inputText.trim();
    if(trimmed.length>0){
      this.props.addTodo(trimmed);
      this.setState({
        inputText: ''
      });

    }
  }

  handleOnChange = event => {
    const key = event.target.value;
      this.setState({
        inputText: key,
      });
    };

  remove(id){

  }

  toggle(id) {
  }

  renderTodoList(){
    let filteredList = [];

    switch (this.props.displayType) {
      case 'active':
        filteredList = filteredList = this.props.todos.filter(item => !item.completed);
        break;
      case 'completed':
        filteredList = this.props.todos.filter(item => item.completed);
        break;
      default:
        filteredList= [...this.props.todos];
    }

    return this.props.todos.map((item, index) => (
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
