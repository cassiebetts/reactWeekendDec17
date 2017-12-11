import React, {Component} from 'react';
import {FirebaseTable} from '../Constants';

export default class MessageBox extends Component {
  constructor(props) {
    super(props);


    this.state = {
      message: ''
    };
  }
  onChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  onKeyup = event => {
    const msg = event.target.value.trim();
    if(event.keyCode === 13 && msg !== ''){
      event.preventDefault();
      let dbCon = this.props.db.database().ref(FirebaseTable);
      dbCon.push({
        message: msg,
        guid: this.props.guid
      });
      this.setState({
        message: ''
      });
    }
  };

  render(){
    return(
      <form>
        <textarea
          className='textarea'
          placeholder='Type a message'
          cols='100'
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.message}
        >
        </textarea>
      </form>
    );
  };
}
