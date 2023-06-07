import ProductCard from "../components/ProductCard"

export default function ProductPage(){
    const products = [{},{},{},{},{},{},]
    return(
        <div>
            <h1>Products page</h1>
            {products.map((product, index) => {
                return(
                    <ProductCard key={index}></ProductCard>
                )
            })}
        </div>

    )
}