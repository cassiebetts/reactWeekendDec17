import React, {Component} from 'react';
import Message from './Message';
import {FirebaseTable} from '../Constants';

export default class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: []
    };
  }

  componentWillMount(){
    const app = this.props.db.database().ref(FirebaseTable)
    app.on('value', snapshot => {
      this.getData(snapshot.val());
        console.log('theFuk')
    });
  }

  getData(values) {
    if (values) {
      const messages = Object.keys(values).map(key => Object.assign({}, values[key], {key}));
      this.setState({messages});
    }
  }

  render() {
    const messageNodes = this.state.messages.map(message=> (
      <div className='card' key={message.key}>
        <div className='card-content'>
          <Message message={message.message} mine={this.props.guid === message.guid} />
        </div>
      </div>
    ));
    return(
      <div>
        {messageNodes}
      </div>
    );
  }
}
