import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./ui/AnimatedRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "./ui/Toast";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <AnimatedRoutes />
        </AuthProvider>
      </BrowserRouter>
      <Toast />
    </QueryClientProvider>
  );
}

export default App;
