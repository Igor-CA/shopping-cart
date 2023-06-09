import "./ProductCard.css"
export default function ProductCard({name, price, image}){
    return(
    <div className="product-card">
        <div className="product-card__image-container">
            <img src={image} alt={name} className="product-card__image"></img>
        </div>
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">Price: {price}</p>
    </div>)
}