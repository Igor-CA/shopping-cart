import ProductCard from "../components/ProductCard"
const someMangas = [
    {"name": "Canções Da Noite Vol. 3", "price": "37.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/cancoes-da-noite-vol-3"},
    {"name": "Undead Unluck Vol. 7", "price": "36.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/undead-unluck-vol-7"},
    {"name": "The Killer Inside Vol. 10", "price": "36.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/the-killer-inside-vol-10"},
    {"name": "The Elusive Samurai 03", "price": "36.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/the-elusive-samurai-03"},
    {"name": "Blue Period Vol. 13", "price": "37.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_4se09h0hs51hp0tvkmdlimtk3i/-S897-FWEBP", "Link": "https://panini.com.br/blue-period-vol-13"},
    {"name": "As Memórias De Vanitas 04", "price": "37.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_2eu6mgckgp2tb651r4j5loul57/-S300-FWEBP?", "Link": "https://panini.com.br/as-memorias-de-vanitas-04"},
    {"name": "Jojo's Bizarre Adventure Parte 5: Golden Wind Vol. 04", "price": "44.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/jojos-bizarre-adventure-parte-5-golden-wind-vol-04"},
    {"name": "One Piece 3 Em 1 Vol. 14", "price": "84.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/one-piece-3-em-1-vol-14"},
    {"name": "Pokémon Diamond And Pearl Vol. 6", "price": "36.90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_5htet3k14l15bcu9bgrr9sip7b/-S300-FWEBP?", "Link": "https://panini.com.br/pokemon-diamond-and-pearl-vol-6"},
    {"name": "Sasaki E Miyano Vol. 5", "price": "36.90", "image": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_98003a8rg15u18abbcftsv8h7k/-S300-FWEBP?", "Link": "https://panini.com.br/sasaki-e-miyano-vol-5"},
]
export default function ProductPage({addItem}){
    const products = [...someMangas ]
    return(
        <div className="products-page">
            <h1>Products page</h1>
            <div className="products-container">
                {products.map(product => {
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