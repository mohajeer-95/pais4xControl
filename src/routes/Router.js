import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Lazy load the components
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
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

const AppRouter = ({ isAuthenticated, handleLogin, handleLogout }) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/starter" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route element={<FullLayout isAuthenticated={isAuthenticated} onLogout={handleLogout} />}>
            <Route path="/starter" element={<Starter />} />
            <Route path="/brokersList" element={<BrokersList />} />
            <Route path="/users" element={<Users />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/table" element={<Tables />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/breadcrumbs" element={<Breadcrumbs />} />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/starter" : "/login"} />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;