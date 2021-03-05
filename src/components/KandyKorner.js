import React from "react";
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews";
// import { LocationList } from "./locations/LocationsList"
// import { LocationProvider } from "./locations/LocationsProvider";
import { NavBar } from "./nav/NavBar";

export const KandyKorner = () => (
    <>
        <Route>
            <>
              <NavBar/>
              <ApplicationViews />
            </>
        </Route>
    </>
);