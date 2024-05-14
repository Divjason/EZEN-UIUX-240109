import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Follower from "./Follower";
import Root from "./Root";
import NotFound from "./NotFound";
import ErrorComponent from "./ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "follower", element: <Follower /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
