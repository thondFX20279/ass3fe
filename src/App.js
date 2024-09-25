import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout/Checkout";
import Shop from "./pages/Shop/Shop";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import RootLayout from "./pages/RootLayout";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import Orders from "./pages/Orders/Orders";
import OrderDetail from "./pages/Detail/OrderDetail";
// create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/detail/:id", element: <Detail /> },
      { path: "/cart", element: <PrivateRoute element={<Cart />} /> },
      { path: "/checkout", element: <PrivateRoute element={<Checkout />} /> },
      { path: "/orders", element: <PrivateRoute element={<Orders />} /> },
      { path: "/orders/:orderId", element: <PrivateRoute element={<OrderDetail />} /> },
    ],
  },
  { path: "/login", element: <PublicRoute element={<Login />} /> },
  { path: "/register", element: <PublicRoute element={<Register />} /> },
]);

// create app
function App() {
  return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
