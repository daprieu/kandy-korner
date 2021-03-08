import React, {useState, createContext } from "react"
//This code imports the main React library, and two functions that it exports.
//We will useState to hold and set the array of locations.

export const ProductContext = createContext()
// The context is imported and used by individual components that need data
// A context stores a certain kind of data to be used in your application. 
// Therefore, when you create a data provider component in React, you need to create a context
//Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.

export const ProductsProvider = (props) => {
    // This component establishes what data can be used.
//Now that the required functions are imported, and an empty context is created, 
//it's time to define the data provider component that will allow other 
//components to use the data in the context.

    const [products, setProducts] = useState([])
    console.log('locations: ', products);
    //useState() hook to define a variable that holds the state of the component, and a function that updates it.
    
    const [category, setCategory] = useState([])
    console.log('category: ', category);

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(response => response.json())
        .then(setProducts)
        
    }
    /*You return a context provider which has the`locations` state, `getLocations` function,
    and the `addlocations` function as keys. This allows any child elements to access them.*/

    const getCategory = () => {
        return fetch("http://localhost:8088/category")
        .then(response => response.json())
        .then(setCategory)
    }
return (
    <ProductContext.Provider value={{products, getProducts, category, getCategory}}> 
    {props.children}
    </ProductContext.Provider>
)
}