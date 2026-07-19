import { Route, Routes } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from './utils/ProtectedRoute';
import Register from "./pages/Register";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <main>
      <AuthContextProvider>
        <Navbar />
        <div className="p-32">  
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
      </AuthContextProvider>
    </main>
  );
}

export default App
