import React from 'react'
import propTypes from "prop-types"

// here I want "React Function Based Component" (enter "rfc")

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>  
  )
}

// PropTypes:- Types of props requested from the App.JS
Navbar.propTypes = {
    // title: propTypes.number,
    // title is the variable name being send from the App.js
    title: propTypes.string,
    aboutText: propTypes.string

    // It will give error
    // title: propTypes.string.isRequired,    
}

// Suppose when any props is send empty from App.js then these default values will be set......
Navbar.defaultProps = {
    title: "DefaultTitle",
    aboutText: "DefaultAbout"
}