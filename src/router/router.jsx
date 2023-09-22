import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import ReservedCars from '../pages/ReservedCars';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/reserved',
    element: <ReservedCars />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
