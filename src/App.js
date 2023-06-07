import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/products">Products</Link> </li>
          <li> <Link to="/cart">Cart</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
