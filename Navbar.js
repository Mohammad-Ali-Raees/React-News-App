import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">News App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

            {/* <li>  <Link className="nav-link text-light" to="/general">General</Link></li> */}
              <li>  <Link className="nav-link text-light" to="/">Business</Link> </li>
              <li>  <Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>    
              <li>  <Link className="nav-link text-light" to="/health">Health</Link></li>
              <li>  <Link className="nav-link text-light" to="/science">Science</Link></li>
              <li>  <Link className="nav-link text-light" to="/sports">Sports</Link></li>
              <li>  <Link className="nav-link text-light" to="/technology">Technology</Link></li>
            </ul>

          </div>
        </div>
      </nav>

    )
  }
}
