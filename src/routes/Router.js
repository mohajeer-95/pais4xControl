// import { lazy } from "react";
// import { Navigate } from "react-router-dom";

// /****Layouts*****/
// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

// /***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const Login = lazy(() => import("../views/login.js"));
// const BrokersList = lazy(() => import("../views/ui/BrokersList.js"));
// const Users = lazy(() => import("../views/ui/Users"));
// const Carousel = lazy(() => import("../views/ui/Carousel"));
// const Slider = lazy(() => import("../views/ui/Slider"));
// const Courses = lazy(() => import("../views/ui/Courses"));
// const Tables = lazy(() => import("../views/ui/Tables"));
// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

// /*****Routes******/

// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Navigate to="/starter" /> },
//       { path: "/starter", exact: true, element: <Starter /> },
//       { path: "/login", exact: true, element: <Login /> },
//       { path: "/brokersList", exact: true, element: <BrokersList /> },
//       { path: "/users", exact: true, element: <Users /> },
//       { path: "/carousel", exact: true, element: <Carousel /> },
//       { path: "/slider", exact: true, element: <Slider /> },
//       { path: "/courses", exact: true, element: <Courses /> },
//       { path: "/table", exact: true, element: <Tables /> },
//       { path: "/forms", exact: true, element: <Forms /> },
//       { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
//     ],
//   },
// ];

// const Authentication = [
//   {
//     path: "/",
//     element: <Login />,
//     children: [
//       { path: "/", element: <Navigate to="/login" /> },
//       { path: "/login", exact: true, element: <Login /> },
//     ],
//   },
// ];

// const routeIs = 1 > 0 ? Authentication : ThemeRoutes

// export default routeIs;


import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'; // Adjust path as needed
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Login = lazy(() => import("../views/login.js"));
const BrokersList = lazy(() => import("../views/ui/BrokersList.js"));
const Users = lazy(() => import("../views/ui/Users"));
const Carousel = lazy(() => import("../views/ui/Carousel"));
const Slider = lazy(() => import("../views/ui/Slider"));
const Courses = lazy(() => import("../views/ui/Courses"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", element: <ProtectedRoute element={<Starter />} /> },
      { path: "/login", element: <Login /> },
      { path: "/brokersList", element: <ProtectedRoute element={<BrokersList />} /> },
      { path: "/users", element: <ProtectedRoute element={<Users />} /> },
      { path: "/carousel", element: <ProtectedRoute element={<Carousel />} /> },
      { path: "/slider", element: <ProtectedRoute element={<Slider />} /> },
      { path: "/courses", element: <ProtectedRoute element={<Courses />} /> },
      { path: "/table", element: <ProtectedRoute element={<Tables />} /> },
      { path: "/forms", element: <ProtectedRoute element={<Forms />} /> },
      { path: "/breadcrumbs", element: <ProtectedRoute element={<Breadcrumbs />} /> },
    ],
  },
];

export default ThemeRoutes;
