import React from 'react'
import { RouteConfig } from './types'
import {Routes, Route } from 'react-router-dom';

export const RoutesFromConfig = ({routes } : {routes: RouteConfig[]}) => {
  return (
  <Routes>
    {routes.map((route:RouteConfig) => 
    <Route key={`component-${route.path}`} path={route.path} element={<route.Component/>}/>)}
  </Routes>)
}
