import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./containers/HomePage";
import DashboardPage from "./containers/DashboardPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
