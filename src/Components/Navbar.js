
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
 
  changeColor = ()=>{
     document.body.classList.add('nav-link active');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top" style={{height: 'auto'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src="\logo_transparent.png" style={{width: '10rem', height: '10rem'}} alt="" />
      </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
        <li className="nav-item mx-2">
          <Link className="nav-link "  aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item mx-2">
          <Link className="nav-link"   to="/about" onClick={this.changeColor} >About</Link>
        </li> */}

        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/business" onClick={this.changeColor}>Business</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/entertainment"onClick={this.changeColor}>Entertainment</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/general"onClick={this.changeColor}>General</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/health"onClick={this.changeColor}>Health</Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/science"onClick={this.changeColor}>Science</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/sports"onClick={this.changeColor}>Sports</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link"   to="/technology"onClick={this.changeColor}>Technology</Link>
        </li>
               
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
