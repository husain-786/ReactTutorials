// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  // name="Husain"

  constructor(){
    super()
    this.state = {
      country:"in",
      mode:"dark",
      style:{
        color: "white",
        background: "black",
      },
      navStyle:{
        color: "white",
        background: "red",
        padding: 0,
        borderBottom: "1px solid white"
      },
    }
    document.getElementsByTagName("html")[0].style.backgroundColor = "black"
    // document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  } 


// for primary color mode....
changeModesPrimary = ()=>{
  this.setState({
    country:"in",
    mode:"primary",
    style:{
      color: "white",
      background: "#0D6EFD",
    },
    navStyle:{
      color: "white",
      background: "#0D6EFD",
      padding: 0,
      borderBottom: "1px solid white"
    },    
  })
  document.getElementsByTagName("html")[0].style.backgroundColor = "#0D6EFD"  
}
// // for secondary color mode....
// const changeModesSecondary = ()=>{
//   setMode("secondary")
//   setStyle({
//     color: "white",
//     background: "#6C757D"
//   })
//   document.body.style.backgroundColor = "#6C757D"   
//   showAlert("Secondary Mode Have Been Enabled", "success")
//   document.title="TextUtils - Secondary Mode"
// }
// // for success color mode....
// const changeModesSuccess = ()=>{
//   setMode("success")
//   setStyle({
//     color: "white",
//     background: "#198754"
//   })
//   document.body.style.backgroundColor = "#198754"    
//   showAlert("Success Mode Have Been Enabled", "success")
//   document.title="TextUtils - Success Mode"
// }
// // for danger color mode....
// const changeModesDanger = ()=>{
//   setMode("danger")
//   setStyle({
//     color: "white",
//     background: "#DC3545"
//   })
//   document.body.style.backgroundColor = "#DC3545"   
//   showAlert("Danger Mode Have Been Enabled", "success")
//   document.title="TextUtils - Danger Mode"
// }
// // for warning color mode....
// const changeModesWarning = ()=>{
//   setMode("warning")
//   setStyle({
//     color: "white",
//     background: "#FFC107"
//   })
//   document.body.style.backgroundColor = "#FFC107"  
//   showAlert("Warning Mode Have Been Enabled", "success")
//   document.title="TextUtils - Warning Mode"
// }
// // for info color mode....
// const changeModesInfo = ()=>{
//   setMode("info")
//   setStyle({
//     color: "white",
//     background: "#0DCAF0"
//   })
//   document.body.style.backgroundColor = "#0DCAF0"  
//   showAlert("Info Mode Have Been Enabled", "success")
//   document.title="TextUtils - Info Mode"
// }
// // for dark color mode....
// const changeModesDark = ()=>{
//   setMode("dark")
//   setStyle({
//     color: "white",
//     background: "black"
//   })
//   document.body.style.backgroundColor = "black"  
//   showAlert("Dark Mode Have Been Enabled", "success")
//   document.title="TextUtils - Dark Mode"

//   // setInterval(()=>{
//   //   document.title="Learning React"
//   // }, 1000)
//   // setInterval(()=>{
//   //   document.title="Executing React"
//   // }, 1420)
// }
// // for light color mode....
// const changeModesLight = ()=>{
//   setMode("light")
//   setStyle({
//     color: "black",
//     background: "white"
//   })
//   document.body.style.backgroundColor = "white"  
//   showAlert("Light Mode Have Been Enabled", "success") 
//   document.title="TextUtils - Home"   
// }

  // searchByCategory = () => {
  //   var x = document.getElementById('search')
  //   this.
  // }

  render() {
    return (
        <Router>
        {/* This is First Class Based Component {this.name}. */}
          <NavBar mode={this.state.mode} style={this.state.style} navStyle={this.state.navStyle} changeModesPrimary={this.changeModesPrimary} changeModesSecondary={this.changeModesSecondary} changeModesSuccess={this.changeModesSuccess} changeModesDanger={this.changeModesDanger} changeModesWarning={this.changeModesWarning} changeModesInfo={this.changeModesInfo} changeModesLight={this.changeModesLight} changeModesDark={this.changeModesDark}/>
          <Routes>
            {/* In class based components key must be used and must be unique to render data according to selection.... */}
            <Route path="/" element={<News key="/" country={this.state.country} category="general" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/buiseness" element={<News key="buiseness" country={this.state.country} category="buiseness" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/health" element={<News key="health" country={this.state.country} category="health" mode={this.state.mode} style={this.state.style}/>} ></Route>
            <Route path="/science" element={<News key="science" country={this.state.country} category="science" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/sports" element={<News key="sports" country={this.state.country} category="sports" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/technology" element={<News key="technology" country={this.state.country} category="technology" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/general" element={<News key="general" country={this.state.country} category="general" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/entertainment" element={<News key="entertainment" country={this.state.country} category="entertainment" mode={this.state.mode} style={this.state.style}/>}></Route>
          </Routes>
        </Router>
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
