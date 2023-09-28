import Dashboard from "./components/dashboard";
import Login from "./components/login";

import { Routes, Route, } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
