import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./styles/index.css";
import { About, LandingPageCampaing, NotFound, Root } from "./components/pages";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/myawesomemarketingcampaign",
    element: <LandingPageCampaing />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>
);
