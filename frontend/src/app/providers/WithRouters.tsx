import { RouterProvider } from 'react-router';
import type { FC } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router';
import WeaponList from '../../pages/WeaponList/WeaponList';
import ClothingPage from '../../pages/Clothing/Clothing';
import GoodsPage from '../../pages/Goods/Goods';
import Error404 from '../../pages/Error/Error404';
import { Root } from '../layouts/Root/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/weapons" replace />} />
      <Route path="weapons" element={<WeaponList />} />
      <Route path="clothing" element={<ClothingPage />} />
      <Route path="goods" element={<GoodsPage />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

const WithRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default WithRouter;
