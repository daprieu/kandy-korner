import React from "react"
// import "./Products.css"
import { Link } from "react-router-dom"

export const ProductCard = ({product, type}) => 
    (
    <section className="product">
        <h3 className="product__name">{ product.name }</h3>
        
        <div className="product__price">price ${product.price}</div>
        <div className="product__sqrft">category {type.type}</div>
        
        

        

    </section>
)