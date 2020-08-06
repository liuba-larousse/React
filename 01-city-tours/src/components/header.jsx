import React from "react"

function Navbar () {
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-info">
<img className="rounded mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqXzQJDlL2k37iyqZ1EofC3ugzx06brMLX0e11sARG-vk544&s" width="30" height="30" alt="travelIcon" loading="lazy"></img>
  <a className="navbar-brand" href="#">City-Tours</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Tours</a>
      </li>
    
    </ul>
  </div>
</nav>
   
    )
}

export default Navbar