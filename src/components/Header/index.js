// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-style"
      />
      <h1 className="logo-title">Wave</h1>
    </div>
    <ul className="header-unorderd-list">
      <li className="header-list-items">
        <Link to="/">Home</Link>
      </li>
      <li className="header-list-items">
        <Link to="./about">About</Link>
      </li>
      <li className="header-list-items">
        <Link to="./contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
