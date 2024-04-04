import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "pages/Home";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
 

  ]);

  return element;
};

export default ProjectRoutes;
