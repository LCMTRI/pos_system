import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';
import { faUtensils, faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="site-title">
        <FontAwesomeIcon icon={faKitchenSet} style={{fontSize: "38px", marginRight: "5px"}} />
        <span>CosyPOS</span> 
      </Link>
      <ul>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/reservation">Reservation</CustomLink>
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