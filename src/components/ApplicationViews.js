import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationsList"
import { LocationProvider } from "./locations/LocationsProvider"
import { ProductList } from "./products/ProductList"
import { ProductsProvider } from "./products/ProductProvider"




export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* exact is needed on the first route, otherwise it will also match the other routes, 
            and the Home will render for every route. */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <h2>locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>
            {/* render the product list whe .../products */}
            <ProductsProvider>
                <Route exact path="/products">
                    <h2>Products</h2>
                    <ProductList />
                </Route>
            </ProductsProvider>
        </>
    )
}