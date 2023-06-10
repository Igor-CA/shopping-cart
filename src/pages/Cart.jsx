import CartProduct from "../components/CartProduct"
export default function Cart({cart, editQuantity}){
    return(
        <div className="cart-page">
            {cart.map(product => {
                return(
                    <CartProduct
                        key={product.name} 
                        name={product.name}
                        image={product.image} 
                        price={product.price}
                        quantity={product.quantity}
                        editQuantity={editQuantity}
                    ></CartProduct>
                )
            })}
        </div>
    )
}