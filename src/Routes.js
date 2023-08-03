import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Movie from "./Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/movie/:movieId",
    element: <Movie />
  }
]);

export { router, RouterProvider };
