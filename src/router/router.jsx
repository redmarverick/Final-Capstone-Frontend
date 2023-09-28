import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import ReservedCars from "../pages/ReservedCars";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Reserve from "../pages/Reserve";
import Details from "../pages/Details";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cars",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/new-reservation",
    element: <Reserve />,
  },
  {
    path: "/reserved",
    element: <ReservedCars />,
  },
  {
    path: "cars/details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
