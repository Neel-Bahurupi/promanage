import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path="/register" element={<AuthPage type={"register"} />} />
        <Route path="/login" element={<AuthPage type={"login"} />} />
      </Routes>
    </div>
  );
}

export default App;
