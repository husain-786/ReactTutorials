import React, {useState} from 'react'
import propTypes from "prop-types"

export default function TextForm(props) {
  const handleOnClick = (event)=>{
    // console.log("handleOnClick")
    // console.log(typeof(event.target.className))  // returns the classes used in that particular tag..... 
    // console.log("Handle on click:- " + text)   // we can access the value of state 'text' here.....
    setText(text.toUpperCase()) // will convert text to uppercase and set to text state...
    countTotalWords(text)
  }

  const convertToLowerCase = ()=>{
    setText(text.toLowerCase()) // will convert text to lowercase and set to text state...
    countTotalWords(text)
  }

  const clearField = ()=>{
    let x = ""
    setText(x) // will set text=""
    countTotalWords(x)
  }

  // when onchange event is handled then by default an event as argument is passesd in the method of handling onchange event.....
  // this will be used repeatedly whenever we use input or textArea......
  // If we donot handle this event we would not be able to write anything in the input field or text area.......
  const handleOnChange = (event)=>{
    // console.log("handle on change")
    setText(event.target.value)
    // console.log(event.target.value + "=======text")
    countTotalWords(event.target.value) 
  }

  // function to count total number of words excluding blank spaces around....
  function countTotalWords(ch){ 
    let x = ch.split(" ")
    // console.log(x)
    let count = 0;
    for (let i=0, len=x.length; i<len; i++ ){
      if (x[i] !== "" && x[i] !== " "){
        count++;
      }
    } 
    coutnNumberOfWords(count)
  }
  
  // Here below statement defines a state (a state is a hook)
  // state acts like a variable but we cannot assign a value directly to a state like variables
  // instead we need a method to assign or update a value to it.
  // Below line defines a state.....
  const [text, setText] = useState('')    // useState is a hook, text is constant variable and the setText is the method...

  // we cannot assign or change value of a state., below statement will give error....
  // text = "husain"  // this is wrong way to change the states...

  // setText("Husain")  // Correct way to change the state value is by using the method defined while defining state.....
 
  const[wordCount, coutnNumberOfWords] = useState(0)    // state for word counts...

  return (
    // this <>(empty tag) in react is called as JSX fragement.....
    <>    
      <div className='container'>
        {/* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */} 
        <h1>{props.heading}</h1>
        <div className="my-3">
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
      <div className='container my-3'>
        <h2>Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008*wordCount} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

TextForm.propTypes={
    heading: propTypes.string.isRequired,
}



// The origin of the beagle is not known.[1] In the 11th century, William the Conqueror brought the St. Hubert Hound and the Talbot hound to Britain. In Britain, both of these strains were then crossed with Greyhounds to give them speed and stamina for deer hunting.[2] Beagles are similar to the Harrier and the extinct Southern Hound, though they are smaller and slower.[1]

// From medieval times, beagle was used as a generic description for the smaller hounds, though these dogs differed considerably from the modern breed. Miniature breeds of beagle-type dogs were known from the times of Edward II and Henry VII, who both had packs of Glove Beagles, so named since they were small enough to fit on a glove, and Queen Elizabeth I kept a breed known as a Pocket Beagle, which stood 8 to 9 inches (20 to 23 cm) at the shoulder. Small enough to fit in a "pocket" or saddlebag, they rode along on the hunt. The larger hounds would run the prey to ground, then the hunters would release the small dogs to continue the chase through underbrush. Elizabeth I referred to the dogs as her singing beagles and often entertained guests at her royal table by letting her Pocket Beagles cavort amid their plates and cups.[3] 19th-century sources refer to these breeds interchangeably and it is possible that the two names refer to the same small variety. In George Jesse's Researches into the History of the British Dog from 1866, the early 17th-century poet and writer Gervase Markham is quoted referring to the beagle as small enough to sit on a man's hand and to the:

//     little small mitten-beagle, which may be companion for a ladies kirtle, and in the field will run as cunningly as any hound whatere, only their musick is very small like reeds.