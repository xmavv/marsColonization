import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default AppLayout;
