import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Claim from "./pages/claim/claim";

import Main from "./pages/main/main";
import Result from "./pages/result/result";

import koha from "./assets/sounds/koha.mp3";
import { useEffect, useState } from "react";
import Fail from "./pages/fail/fail";

const Sound = require("react-sound").default;

function App() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // playMusic();
  }, []);

  const playMusic = () => {
    document.addEventListener("click", () => setPlaying(true));
  };

  return (
    <div className="App">
      <Sound
        url={koha}
        loop={true}
        playStatus={playing ? "PLAYING" : "STOPPED"}
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/claim" element={<Claim />} />
          <Route exact path="/fail" element={<Fail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
