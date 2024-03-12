import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { About, Work, Home } from "./pages/index";

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<Work />} />
    <Route path="/about" element={<About />} />
  </Route>
);

const router = createBrowserRouter(routerDefinitions);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
