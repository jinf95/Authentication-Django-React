import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import DashboardPage from "./containers/DashboardPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
