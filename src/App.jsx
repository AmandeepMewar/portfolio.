import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";

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
