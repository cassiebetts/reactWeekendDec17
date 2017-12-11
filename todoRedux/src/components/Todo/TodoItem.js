import React from 'react';

const TodoItem = ({toggle, remove, item}) => (
  <div className='columns'>
    <div className='columns is-four-fifths'>
      <label className='checkbox'>
        <input type='checkbox' onClick={toggle} defaultChecked={item} />
          {item.text}
        </label>
    </div>
    <div className='column'>
      <span className='icon has-text-danger fa fa-2x' onClick={remove}>
        <i className='fa fa-minus-circle' />
      </span>
    </div>
  </div>
);

export default TodoItem
