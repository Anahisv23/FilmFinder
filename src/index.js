import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {router, RouterProvider} from "./Routes"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>
);
