import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      {/* try to set navbar in a dropdown menubar */}
     <div className="dropdown my-2">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/">Business</Link></li>
    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
    <li><Link className="dropdown-item" to="/general">General</Link></li>
    <li><Link className="dropdown-item" to="/health">Health</Link></li>
    <li><Link className="dropdown-item" to="/science">Science</Link></li>
    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
  </ul>
</div>
    
    </div>
  )
}

export default Navbar
