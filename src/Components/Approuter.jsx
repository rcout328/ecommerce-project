import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import ConfirmAddress from "./ConfirmAddress";
import ConfirmPayment from "./Confirm";
import LoginButton from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:_id",
    element: <ProductDetails />,
  },
  {
    path: "/confirmform",
    element: <ConfirmAddress />,
  },
  {
    path: "/success",
    element: <ConfirmPayment />,
  },
  {
    path: "/login",
    element: <LoginButton />,
  },
]);

const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default AppRouter;
