import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Config/ProtectedRoutes";
import Dashboard from "./Views/Dashboard";
import PublicRoutes from "./Config/PublicRoutes";
import Login from "./Views/AuthView/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
