import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,

} from 'react-router-dom';
import Todo from './components/Todo/Todo'
import About from './components/About'
// import ContactUs from './components/ContactUs'
import Parts from './components/Parts/Parts'


const App = () => (
  <Router>

    <div className='container'>
      <nav className='navbar'>
        <div className='navbar-menu'>
          <div className='navbar-item is-tab'><Link to='/'>Todo</Link></div>
          <div className='navbar-item is-tab'><Link to='/about'>About</Link></div>
          <div className='navbar-item is-tab'><Link to='/contact-us'>Contact Us</Link></div>
          <div className='navbar-item is-tab'><Link to='/parts'>Parts</Link></div>
        </div>
      </nav>
      <hr />
      <Route exact path='/' component={Todo} />
      <Route path='/about' component={About} />

      <Route path='/parts' component={Parts} />
    </div>
  </Router>
);

export default App;
