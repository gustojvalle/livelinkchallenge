import React from "react";
import { Route } from "react-router-dom";
import { RouteConfig } from "./types";


export const RouteFromConfig =  ({routeConfig , ...rest}:{routeConfig :RouteConfig}  )=> {
  return (<Route path={routeConfig.path} element={<routeConfig.Component  />} {...rest} />);
}
