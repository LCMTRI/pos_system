import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="site-title">
        POS System
      </Link>
      <br></br><br></br>
      <ul>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/table">Table</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/employee">Employee</CustomLink>
      </ul>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}