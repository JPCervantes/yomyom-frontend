import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { map } from 'lodash';
import routes from "./routes";



export function Navigation() {  // This envolve all the navigation paths
    return (
        <BrowserRouter>        
            <Routes>
                {map(routes, (route, index) => (        //Its an iteration of routes, with the keys above, to render layouts and components
                    <Route 
                        
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component /> 
                            </route.layout>
                        }
                    /> 
                ))}
              
            </Routes> 
        </BrowserRouter>
    )
}