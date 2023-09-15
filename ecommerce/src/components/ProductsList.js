import Product from "./Product"
import products from "../fake-data/all-products"

const ProductsList = () => {
  return (
    <div>
      {products.map(product => {
        return(
          <Product key={product.id} title={product.title} imgURL={product.image}/>
        )
      })}
    </div>
  )
}

export default ProductsList