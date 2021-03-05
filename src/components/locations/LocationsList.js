import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { LocationContext } from "./LocationsProvider"
import { LocationCard } from "./Location"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    // console.log('locations: ', locations);
    // The useContext hook allows you to use data structures and functions that a parent provider component exposes.
    // To start, you need to import the context object you created in the provider 
    // component so that the Context hook can access the objects it exposes.
  // This state changes when `getLocations()` is invoked below

  useEffect(() => {
    // console.log("LocationsList: useEffect - getLocations")
    getLocations()
}, [])
// useEffect - reach out to the world for something
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the locations. 

// const history = useHistory()
//  Use the .map() array method to iterate the array of animals and 
//   generate HTML for each one by invoking the AnimalCard component function.
{/* <button onClick={() => {history.push("/locations/create")}}>Add Location</button> */}
  return (
    <>
    <div className="locations">
      {/* {console.log("LocationList: Render", locations)} */}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
    </>
  )
}
// ***Note that even though it looks like you are specifying an HTML component, you are actually invoking 
// a function. Also, the key and animal arguments look like HTML attributes here, but they actually become 
// properties on an object that gets passed as an argument.
