import { useState } from "react";
import axios from "axios";
import ProductCard from "./componentes/ProductCard"

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([])
  
  const handleChange = (event)=>{
    setQuery(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`)
        .then(response => setProducts(response.data))
    }

  return (
    <section>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Type to search..." type="text"/>
        <input type="submit" className="m-2 btn btn-primary"/>
    </form>
    <ul>
        {products.map(product=>{
            return(
                <ProductCard product={product}/>
            )
        })}
    </ul>
</section>
)
}

export default SearchProducts