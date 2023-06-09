import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import "./App.css"
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [productsCart, setProductsCart] = useState([
    
])
  
  const removeItem = (name) => { 
    let newCart = productsCart.filter(item => item.name !== name)
    setProductsCart(newCart)
  }
  const addItem = (item) => {
    let notInCart = true
    let newCart = productsCart.map(product => {
      if(product.name === item.name){
        let newQuantity = product.quantity + 1;
        notInCart = false
        return {...product, quantity:newQuantity}
      }
      return product
    })
    
    if(notInCart){
      newCart = [...productsCart, {...item, quantity: 1}]
    }
    
    setProductsCart(newCart)
  }
  const editQuantity = (item, value) => {
    if(value < 1){
      removeItem(item.name)
      return
    }
    let newCart = productsCart.map(product => {
      if (product.name === item.name){
        return {...product, quantity:Number(value)}
      }
      return product
    })
    setProductsCart(newCart)
  } 

  return (
    <BrowserRouter>
      <NavBar cart={productsCart}></NavBar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={
          <Cart cart={productsCart} editQuantity={editQuantity} />}></Route>
        <Route path='/products' element={
          <ProductPage addItem={addItem}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
