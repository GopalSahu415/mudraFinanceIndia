import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import AuthModals from "./components/modals/AuthModals";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <AuthModals />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155'
          }
        }}
      />
    </AuthProvider>
  );
}
