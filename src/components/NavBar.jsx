import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar({cart}){
  let cartQuantity = 0
  cart.forEach(item => {
    cartQuantity += item.quantity
  })
  return(
    <nav className="navbar">
      <ul className="navbar__list">
        <li> <Link to="/" className="navbar__link">Home</Link> </li>
        <li> <Link to="/products" className="navbar__link">Products</Link> </li>
        <li> <Link to="/cart" className="navbar__link">Cart {cartQuantity}</Link> </li>
      </ul>
    </nav>
  )
}