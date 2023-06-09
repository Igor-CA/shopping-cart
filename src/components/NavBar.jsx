import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
      <nav className="navbar">
        <ul className="navbar__list">
          <li> <Link to="/" className="navbar__link">Home</Link> </li>
          <li> <Link to="/products" className="navbar__link">Products</Link> </li>
          <li> <Link to="/cart" className="navbar__link">Cart</Link> </li>
        </ul>
      </nav>
    )
}