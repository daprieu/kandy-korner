import React from "react"
// import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location}) => 
    (
    <section className="location">
        <h3 className="location__name"><Link to={`/locations/detail/${location.id}`}>
          { location.name }
        </Link></h3>
        <div className="location__name">name {location.name}</div>
        <div className="location__address">address {location.address}</div>
        <div className="location__sqrft">square feet {location.sqrFt}</div>
        <div className="location__handicap">Handicap access {location.handicap}</div>

    </section>
)