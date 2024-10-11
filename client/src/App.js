import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Toast from "./components/Toast";
import ProgressDialog from "./components/ProgressDialog";
import { AuthProvider } from "./contexts/AuthContext";
import OfflineRoutes from "./routes/OfflineRoutes";
import SignUp from "./pages/signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/" exact />
          </Route>
          <Route element={<OfflineRoutes />}>
            <Route element={<SignUp />} path="/signup" exact />
          </Route>
        </Routes>
      </Router>
      <ProgressDialog />
      <Toast />
    </AuthProvider>
  );
}

export default App;
