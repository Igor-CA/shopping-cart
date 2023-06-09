import "./ProductCard.css"
export default function ProductCard({product, addItem}){
    const {name, image, price} = product
    return(
    <div className="product-card">
        <div className="product-card__image-container">
            <img src={image} alt={name} className="product-card__image"></img>
        </div>
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">Price: ${price}</p>
        <button 
            className="product-card__buy"
            onClick={() => addItem(product)}
        >BUY</button>
    </div>)
}