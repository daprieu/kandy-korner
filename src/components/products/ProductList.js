import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { category, getCategory } = useContext(ProductContext)
    console.log('category: ', category);
    // console.log('products: ', products);
    // The useContext hook allows you to use data structures and functions that a parent provider component exposes.
    // To start, you need to import the context object you created in the provider 
    // component so that the Context hook can access the objects it exposes.
  // This state changes when `getproducts()` is invoked below

useEffect(() => {
    // console.log("productsList: useEffect - getProducts")
    getCategory()
    .then(getProducts)
}, [])
// useEffect - reach out to the world for something
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the products. 

// const history = useHistory()
//  Use the .map() array method to iterate the array of animals and 
//   generate HTML for each one by invoking the AnimalCard component function.
{/* <button onClick={() => {history.push("/products/create")}}>Add product</button> */}
return (
    <>
    <div className="products">
      {/* {console.log("productList: Render", products)} */}
        {
        products.map(product => {
            const type = category.find(category => category.id === product.categoryId)
            return <ProductCard key={product.id} product={product} type={type} />
        })
        }
    </div>
    </>
    )
}
// ***Note that even though it looks like you are specifying an HTML component, you are actually invoking 
// a function. Also, the key and animal arguments look like HTML attributes here, but they actually become 
// properties on an object that gets passed as an argument.
