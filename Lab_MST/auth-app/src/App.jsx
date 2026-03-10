import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <>
    <h1>EcoTrack Authentication App</h1>
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;