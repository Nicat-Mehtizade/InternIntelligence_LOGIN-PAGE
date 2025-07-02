import { Route, Routes, Navigate } from "react-router-dom";
import LoginRegisterLayout from "./layout/login-register-layout";
import Login from "./pages/Login/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/" element={<LoginRegisterLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
