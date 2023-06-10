import "./CartProduct.css"

export default function CartProduct({name, price, image, quantity, editQuantity}){
    const product = {name, price, image, quantity}
    return(
        <div className="cart-product">
            <div className="cart-product__image-container">
                <img src={image} alt={name} className="cart-product__image"></img>
            </div>
            <div className="cart-product__products-info">
                <p>{name}</p>
                <p>${(price*100*quantity)/100}</p>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {editQuantity(product, e.target.value)}}
                />
            </div>
        </div>
    )
}