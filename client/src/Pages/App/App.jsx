import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './Routes';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
       {routes.map(route => <Route path={route.path} element={route.element} key={route.path}/>)}
    </Routes>
  </BrowserRouter>
  );
}



