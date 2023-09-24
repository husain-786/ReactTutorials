// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  name="Husain"
  render() {
    return (
      <div>
        {/* This is First Class Based Component {this.name}. */}
        <NavBar/>
        <News/>
      </div>
    )
  }
}

// Sending props to another component in class based component is same but to use that props in that component is 
// disserent, e.g:- let {title, description} = this.props

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
