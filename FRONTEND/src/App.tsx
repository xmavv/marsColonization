import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Building from "./pages/Building";
import Tasks from "./pages/Tasks";
import Workers from "./pages/Workers";
import Start from "./pages/Start";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="homepage" />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="start" element={<Start />} />
          <Route path="building/:buildingId" element={<Building />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="workers" element={<Workers />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
