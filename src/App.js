import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "./pages/main/main";
import Result from "./pages/result/result";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
