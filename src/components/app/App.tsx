import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { Error } from '../pages/error/error';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const HomePage = lazy(() => import('../pages/home-page/home-page'));
const BuyPage = lazy(() => import('../pages/buy-page/buy-page'));
const AboutPage = lazy(() => import('../pages/about-page/about-page'));
const ProductListing = lazy(() => import('../pages/product-listing/product-listing'));
const ShoppingCart = lazy(() => import('../pages/shopping-cart/shopping-cart'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>...Loading</>}><HomePage /></Suspense>
      },
      {
        path: '/buy',
        element: <Suspense fallback={<>...Loading</>}><BuyPage /></Suspense>
      },
      {
        path: '/about',
        element: <Suspense fallback={<>...Loading</>}><AboutPage /></Suspense>
      },
      {
        path: '/product/:id',
        element: <Suspense fallback={<>...Loading</>}><ProductListing /></Suspense>
      },
      {
        path: '/shopping-basket',
        element: <Suspense fallback={<>...Loading</>}><ShoppingCart /></Suspense>
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
