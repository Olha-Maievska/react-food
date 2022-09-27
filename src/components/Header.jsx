import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="indigo brown darken-1">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">
            React Meals
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
