import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { About, Work, Home } from "./pages/index";
import Error from "./pages/Error/Error";

const routerDefinitions = createRoutesFromElements(
  <Route errorElement={<Error />}>
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
