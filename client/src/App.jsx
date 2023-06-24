import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NeedLoginPage from './pages/NeedLoginPage';
import Days from './pages/Days';
import Timer from './components/Timer';
import ImportantDatePage from './pages/ImportantDatePage';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/weekly-planner"
          element={<Days />}
        />
        <Route
          path="/important-date"
          element={<ImportantDatePage /> }
        />
        <Route path="/timer" element={<Timer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
