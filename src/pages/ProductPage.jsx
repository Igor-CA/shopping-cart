import ProductCard from "../components/ProductCard"
const someMangas = [
    {"titulo": "Canções Da Noite Vol. 3", "preço": "$37,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_j47s1h75id6eh1s85pnq8rnd2i/-S897-FWEBP", "Link": "https://panini.com.br/cancoes-da-noite-vol-3"},
    {"titulo": "Undead Unluck Vol. 7", "preço": "$36,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_028v79aend6hrcn5c0v3qoij50/-S300-FWEBP?", "Link": "https://panini.com.br/undead-unluck-vol-7"},
    {"titulo": "The Killer Inside Vol. 10", "preço": "$36,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_qm627b6plp4ttbmg83k6cscn29/-S300-FWEBP?", "Link": "https://panini.com.br/the-killer-inside-vol-10"},
    {"titulo": "The Elusive Samurai 03", "preço": "$36,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_o9nefb2bgt0fr0to89iub2sr52/-S300-FWEBP?", "Link": "https://panini.com.br/the-elusive-samurai-03"},
    {"titulo": "Blue Period Vol. 13", "preço": "$37,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_4se09h0hs51hp0tvkmdlimtk3i/-S897-FWEBP", "Link": "https://panini.com.br/blue-period-vol-13"},
    {"titulo": "As Memórias De Vanitas 04", "preço": "$37,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_2eu6mgckgp2tb651r4j5loul57/-S300-FWEBP?", "Link": "https://panini.com.br/as-memorias-de-vanitas-04"},
    {"titulo": "Jojo's Bizarre Adventure Parte 5: Golden Wind Vol. 04", "preço": "$44,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_c55rirvfuh76j5qfj2n3jjap0q/-S300-FWEBP?", "Link": "https://panini.com.br/jojos-bizarre-adventure-parte-5-golden-wind-vol-04"},
    {"titulo": "One Piece 3 Em 1 Vol. 14", "preço": "$84,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_ktkbnfje410et5tdq33m3gt06s/-S300-FWEBP?", "Link": "https://panini.com.br/one-piece-3-em-1-vol-14"},
    {"titulo": "Pokémon Diamond And Pearl Vol. 6", "preço": "$36,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_5htet3k14l15bcu9bgrr9sip7b/-S300-FWEBP?", "Link": "https://panini.com.br/pokemon-diamond-and-pearl-vol-6"},
    {"titulo": "Sasaki E Miyano Vol. 5", "preço": "$36,90", "ImagemSrc": "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_98003a8rg15u18abbcftsv8h7k/-S300-FWEBP?", "Link": "https://panini.com.br/sasaki-e-miyano-vol-5"},
]
export default function ProductPage(){
    const products = [...someMangas ]
    return(
        <div className="products-page">
            <h1>Products page</h1>
            <div className="products-container">
                {products.map((product, index) => {
                    return(
                        <ProductCard 
                            key={index} 
                            name={product.titulo} 
                            image={product.ImagemSrc}
                            price={product.preço}
                        ></ProductCard>
                    )
                })}
            </div>
        </div>

    )
}