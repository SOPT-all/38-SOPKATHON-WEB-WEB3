import { createBrowserRouter } from 'react-router-dom';

import { routePath } from '@routes/path';

import DetailPage from '@pages/detailPage/DetailPage';
import Home from '@pages/home/Home';
import MyPage from '@pages/myPage/MyPage';
import WritePage from '@pages/writePage/WritePage';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <Home />,
  },
  {
    path: routePath.DETAIL,
    element: <DetailPage />,
  },
  {
    path: routePath.MY_PAGE,
    element: <MyPage />,
  },
  {
    path: routePath.WRITE,
    element: <WritePage />,
  },
]);
