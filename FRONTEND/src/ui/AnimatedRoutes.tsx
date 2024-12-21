import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AppLayout from "../ui/AppLayout";
import Building from "../pages/Building";
import Tasks from "../pages/Tasks";
import Workers from "../pages/Workers";
import Start from "../pages/Start";
import PageNotFound from "../pages/PageNotFound";
import HomeLayout from "../ui/HomeLayout";
import Users from "../pages/Users";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate replace to="homepage" />} />
        <Route element={<HomeLayout />}>
          <Route path="homepage" element={<Homepage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="app" element={<Start />} />
          <Route path="app/building/:buildingType" element={<Building />} />
          <Route path="app/tasks" element={<Tasks />} />
          <Route path="app/workers" element={<Workers />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
