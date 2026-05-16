import { createBrowserRouter } from 'react-router-dom';

import { routePath } from '@routes/path';

import App from '../App';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <App />,
  },
]);
