import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import Home from "./ui/Home";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

// const my_env = import.meta.env.VITE_ENV || process.env.VITE_ENV;

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // API call to get what is needed to display menu
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction, // Whenever there is a form submission, this action is called
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction, // Allows to change priority after submitting order
      },
    ],
  },
]);

const hashRouter = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // API call to get what is needed to display menu
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction, // Whenever there is a form submission, this action is called
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction, // Allows to change priority after submitting order
      },
    ],
  },
]);

function App() {
  // console.log(my_env);
  // if (my_env === "dev") return <RouterProvider router={router} />;
  // if (my_env === "prod") return <RouterProvider router={hashRouter} />;
  return <RouterProvider router={hashRouter} />;
}

export default App;
