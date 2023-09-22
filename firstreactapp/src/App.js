/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  //It is a state which defines the mode of Navbar on the action of switch........
  const [mode, setMode] = useState("light")
  // State used to change the text beside the toggle button in NavBar, it is sent as props in the NavBar.....
  const[btnText, setbtnText] = useState("Enable dark Mode")
  // style state specially used for About.JS.........
  const [style, setStyle] = useState({
    color: "black",
    background: "white",
  })

  // State variable used for alert mesagesd.....
  const [alert, setAlert] = useState(null)

  // function used to show the alert contents whenever required......
  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    })

    // dismissing the alert message after 2 seconds......
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // function which will change or say handle the value of mode and will be sent as props in the NavBar.......
  const toggleMode = ()=>{
    if (mode === "dark"){
      setMode("light")
      setbtnText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      setStyle({
        color: "black",
        background: "white",
      })
      showAlert("Light Mode Have Been Enabled", "success")
    }
    else{
      setMode("dark")
      setbtnText("Enable Light Mode")
      document.body.style.backgroundColor = "black"
      setStyle({
        color: "white",
        background: "black",
      })
      showAlert("Dark Mode Have Been Enabled", "success")
    }
  }

  // state used to change the different color modes of page.......
  const [colorModes, changeModeColors] = useState({
    randomTextColor: "black",
    randomBackgroundColor: "white",
  })
  // for primary color mode....
  const changeModesPrimary = ()=>{
    setStyle({
      color: "#b3b8bd",
      background: "#037ffc"
    })
    document.body.style.backgroundColor = "#037ffc"    
    changeModeColors({
      randomTextColor: "#b3b8bd",
      randomBackgroundColor: "#037ffc"
    })
  }

  return (
    <>  
      {/* Sending title as string */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText} changeModesPrimary={changeModesPrimary}/>

      {/* Sending showAlert function as props so that we can use it on different button actions.... */}
      <Alert alert={alert}/>
      {/* Sending title as number */}
      {/* <Navbar title={3} aboutText="About Us"/>     */}

      {/* Not any props is sent, in this case this default values get executed */}
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} toggleMode={toggleMode}/>
      </div>
      
      <About mode={mode} style={style}/>
    </>
  );
}
export default App;


// State(React Hooks):- 
// Its the state of a component
// e.g.,  const[text, setText] = useState("first")
// Here text is a state contains text="first", we can change states values like variables it gives errors, 
// so we use methods to update the state values, if we try to store like other primitive side gives error.
//  setText is a function used in above example for the text to update                                                       
