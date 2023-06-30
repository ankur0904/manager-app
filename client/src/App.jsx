import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DaysPage from "./pages/DaysPage";
import Timer from "./components/Timer";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weekly-planner" element={<DaysPage />} />
          {/* <Route path="/important-date" element={<ImportantDatePage />} /> */}
          <Route path="/timer" element={<Timer />} />

          <Route path="/add/sunday/task" element={<AddPage day="sunday" />} />
          <Route path="/add/monday/task" element={<AddPage day="monday" />} />
          <Route path="/add/tuesday/task" element={<AddPage day="tuesday" />} />
          <Route
            path="/add/wednesday/task"
            element={<AddPage day="wednesday" />}
          />
          <Route
            path="/add/thursday/task"
            element={<AddPage day="thursday" />}
          />
          <Route path="/add/friday/task" element={<AddPage day="friday" />} />
          <Route
            path="/add/saturday/task"
            element={<AddPage day="saturday" />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
