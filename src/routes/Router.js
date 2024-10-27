import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'; // Adjust path as needed
/****Layouts*****/
import FullLayout from "../layouts/FullLayout"

/***** Pages ****/

import Starter from "../views/Starter"
import Login from "../views/login"
import BrokersList from "../views/ui/BrokersList"
import Users from "../views/ui/Users"
import Carousel from "../views/ui/Carousel"
import Banner from "../views/ui/Slider"
import Courses from "../views/ui/Courses"
import Tables from "../views/ui/Tables"
import Forms from "../views/ui/Forms"
import RequestLinks from "../views/ui/RequestLinks"
import CashBackList from "../views/ui/cashBackList"
import PaymentList from "../views/ui/paymentList"
import EditBroker from "../views/ui/EditBroker"

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
      { path: "/editBroker/:id", element: <ProtectedRoute element={<EditBroker />} /> },
      { path: "/users", element: <ProtectedRoute element={<Users />} /> },
      { path: "/carousel", element: <ProtectedRoute element={<Carousel />} /> },
      { path: "/banner", element: <ProtectedRoute element={<Banner />} /> },
      { path: "/courses", element: <ProtectedRoute element={<Courses />} /> },
      { path: "/cashBackList", element: <ProtectedRoute element={<CashBackList />} /> },
      { path: "/paymentList", element: <ProtectedRoute element={<PaymentList />} /> },
      { path: "/table", element: <ProtectedRoute element={<Tables />} /> },
      { path: "/forms", element: <ProtectedRoute element={<Forms />} /> },
      { path: "/requestLinks", element: <ProtectedRoute element={<RequestLinks />} /> },
    ],
  },
];

export default ThemeRoutes;
