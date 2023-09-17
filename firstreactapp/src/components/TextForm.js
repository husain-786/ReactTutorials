import React, {useState} from 'react'
import propTypes from "prop-types"

export default function TextForm(props) {
  const handleOnClick = (event)=>{
    // console.log("handleOnClick")
    // console.log(typeof(event.target.className))  // returns the classes used in that particular tag..... 
    // console.log("Handle on click:- " + text)   // we can access the value of state 'text' here.....
    setText(text.toUpperCase()) // will convert text to uppercase and set to text state...
  }

  const convertToLowerCase = ()=>{
    setText(text.toLowerCase()) // will convert text to lowercase and set to text state...
  }

  const clearField = ()=>{
    setText("") // will set text=""
  }

  // when onchange event is handled then by default an event as argument is passesd in the method of handling onchange event.....
  // this will be used repeatedly whenever we use input or textArea......
  // If we donot handle this event we would not be able to write anything in the input field or text area.......
  const handleOnChange = (event)=>{
    // console.log("handle on change")
    setText(event.target.value) 
  }

  // Here below statement defines a state (a state is a hook)
  // state acts like a variable but we cannot assign a value directly to a state like variables
  // instead we need a method to assign or update a value to it.
  // Below line defines a state.....
  const [text, setText] = useState('Enter Text Here.......')    // useState is a hook, text is constant variable and the setText is the method...

  // we cannot assign or change value of a state., below statement will give error....
  // text = "husain"  // this is wrong way to change the states...

  // setText("Husain")  // Correct way to change the state value is by using the method defined while defining state.....
 

  return (
    <div>
        {/* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */} 
        <h1>{props.heading}</h1>
        <div className="mb-3">
             {/* if value=x, x is a normal variable, when we use normal variable for value then the value will not be rendered
                 because by default React do not watch all the variables*/}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>    
        <div className='d-flex justify-content-between w-50'>
          <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
          <button className="btn btn-primary" onClick={convertToLowerCase}>Convert to LowerCase</button>
          <button className="btn btn-primary" onClick={clearField}>Clear</button>
        </div>  
    </div>
  )
}

TextForm.propTypes={
    heading: propTypes.string.isRequired,
}