import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import ReservedCars from "../pages/ReservedCars";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/reserved",
    element: <ReservedCars />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
