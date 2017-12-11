import React, {Component} from 'react';

const Message = props => {
  return (
    <div className='card'>
      <div className={props.mine ? 'has-text-right':''}>
        {props.message}
      </div>
    </div>
  );
};


export default Message
