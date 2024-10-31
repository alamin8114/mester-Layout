import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className="navbar ">
      <div className="container">
        <div className="nav-row">
          <div className="logo">
            <h1>Md Alamin Islam</h1>
          </div>
          <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/LayoutTwo">Blog</Link></li>
              <li><Link to="/LayoutTwo/services">Services</Link></li>
              <li><Link to="/LayoutThree">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar