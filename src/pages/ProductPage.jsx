import ProductCard from "../components/ProductCard"
import {products} from "../products"
export default function ProductPage({addItem}){
    const productsList = [...products ]
    return(
        <div className="products-page">
            <div className="products-container">
                {productsList.map(product => {
                    return(
                        <ProductCard 
                            key={product.name} 
                            product={product}
                            addItem={addItem}
                        ></ProductCard>
                    )
                })}
            </div>
        </div>

    )
}