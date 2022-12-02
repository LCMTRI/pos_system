import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';
import { faUtensils, faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { user } = UserAuth();
  return (
    <div className="nav">
      <Link to="/" className="site-title">
        <FontAwesomeIcon icon={faKitchenSet} style={{fontSize: "38px"}} />
        <span>CosyPOS</span> 
      </Link>
      {user.email === "admin@gmail.com" ? <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/employee">Employee</CustomLink>
      </ul> : user.email === "emp@gmail.com" ? <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/reservation">Reservation</CustomLink>
      </ul> : <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/menu">Menu</CustomLink>
      </ul>}
      {/* <ul>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/reservation">Reservation</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/employee">Employee</CustomLink>
      </ul> */}
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