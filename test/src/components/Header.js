import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className ='navbar'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://www.kbb.com'>
            {this.props.title}
          </a>
        </div>
      </nav>
    );
  }
}
