import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import "./App.css"
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
