import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import ReservedCars from "../pages/ReservedCars";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Reserve from "../pages/Reserve";
import Details from "../pages/Details";
import HomePage from "../pages/HomePage";
import CarsToReserve from "../pages/CarsToReserve";
import AddCarForm from "../pages/AddCarForm";
import DeleteCar from "../pages/DeleteCar";
import PrivateRoute from "./privateRoute";

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
    element: (
      <PrivateRoute>
        <Reserve />
      </PrivateRoute>
    ),
  },
  {
    path: "/reserved",
    element: (
      <PrivateRoute>
        <ReservedCars />
      </PrivateRoute>
    ),
  },
  {
    path: "cars/details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/car-to-reserve",
    element: <CarsToReserve />,
  },
  {
    path: "/new-car",
    element: <AddCarForm />,
  },
  {
    path: "/delete-car",
    element: <DeleteCar />,
  },
]);

export default router;
