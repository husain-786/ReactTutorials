import React, { useState } from 'react'

// export default function About({mode}) {  // using this syntax we can access directly without using keyword props......
    export default function About(props) {
    //State used to switch from dark mode to light mode and from light mode to dark mode......
    const [style, setStyle] = useState({
        color: "black",
        background: "white",
    })
    
    // State used to change the text of buttons....
    const[btnText, setbtnText] = useState("Enable Dark Mode")

    // function used to togglt the colors and button text......
    const changeDarkAndLightMode = () =>{
        if (props){
            setStyle({
                color: "black",
                background: "white",
            })
            setbtnText("Enable Dark Mode")
        }
        else{
            setStyle({
                color: "white",
                background: "black",
            })
            setbtnText("Enable Light Mode")            
        }
    }

// *************************************************************************************************************
// The style of About.js is not being used here because to toggle between the dark mode and light mode I am sending the props.style state from App.js......

    
  return (
    <div className='container' style={props.style}>
        <div className="accordion" id="accordionExample" style={props.style}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion-item" style={props.style}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" style={props.style} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.style}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"  style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={props.style} data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.style}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={props.style}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        <div className="container my-5">
         <button type="button" className="btn btn-outline-primary" onClick={changeDarkAndLightMode}>{btnText}</button>
        </div>
    </div>
  )
}
