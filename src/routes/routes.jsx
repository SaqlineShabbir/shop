import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import ErrorPage from "../pages/ErrorPage";

import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import AddProduct from "../pages/dashboard/AddProduct";
import ManageProducts from "../pages/dashboard/ManageProducts";
import Profile from "../pages/dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () =>
        //   fetch("https://stride-final-project-server.vercel.app/shoes"),
      },
      //   {
      //     path: "/products/:id",
      //     element: <ProductDetails />,
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://stride-final-project-server.vercel.app/shoes/${params.id}`
      //       ),
      //   },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },

      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  //   {
  //     path: "dashboard",
  //     element: <DashboardLayout />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         path: "home",
  //         element: (
  //           <PrivateRoute>
  //             <Dashboard />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "profile/edit/:id",
  //         element: (
  //           <PrivateRoute>
  //             <EditProfile />
  //           </PrivateRoute>
  //         ),
  //         loader: ({ params }) =>
  //           fetch(
  //             `https://stride-final-project-server.vercel.app/user/get/${params.id}`
  //           ),
  //       },
  //       {
  //         path: "all-products",
  //         element: (
  //           <PrivateRoute>
  //             <AllProducts />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "add-products",
  //         element: (
  //           <PrivateRoute>
  //             <AddProducts />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "all-products/edit/:id",
  //         element: (
  //           <PrivateRoute>
  //             <EditProducts />
  //           </PrivateRoute>
  //         ),
  //         loader: ({ params }) =>
  //           fetch(
  //             `https://stride-final-project-server.vercel.app/shoes/${params.id}`
  //           ),
  //       },
  //     ],
  //   },
]);
