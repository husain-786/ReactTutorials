import React, {useState} from 'react'
import propTypes from "prop-types"

export default function TextForm(props) {
  // Here below statement defines a state (a state is a hook)
  // state acts like a variable but we cannot assign a value directly to a state like variables
  // instead we need a method to assign the
  const [text, setText] = useState('Sajjad')

  return (
    <div>
        {/* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>      
        <button className="btn btn-primary">Convert to Uppercase</button>
    </div>
  )
}

TextForm.propTypes={
    heading: propTypes.string.isRequired,
}