import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import ProductList from './Components/ProductList/ProductList.jsx'
import Cart from './Components/Cart/Cart.jsx'
import store, { persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:slug',
        element: <ProductDetails />,
      },
      {
        path: '/products/:slug',
        element: <ProductList />,
      },
      {
        path: '/cart',
        element: <Cart />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
