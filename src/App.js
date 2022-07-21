import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
      {/* Usamos el AuthProvider para darle autenticacion a todoas las rutas,todos tienen acceso a user */}
    </div>
  );
}

export default App;
