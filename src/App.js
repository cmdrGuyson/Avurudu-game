import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import "./App.css";
import Claim from "./pages/claim/claim";

import Main from "./pages/main/main";
import Result from "./pages/result/result";

import koha from "./assets/sounds/koha.mp3";
import win from "./assets/sounds/win.mp3";
import { useRef, useState } from "react";
import Fail from "./pages/fail/fail";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { WinStateProvider } from "./context/data.context";

ReactGA.initialize("G-7PM0YFSWY2");

function App() {
  const audioRef = useRef(null);
  const winRef = useRef(null);

  const onWin = () => {
    winRef.current.play();
  };

  return (
    <div
      className="App"
      onClick={() => {
        audioRef.current.play();
      }}
    >
      <audio src={koha} loop={true} ref={audioRef} />
      <audio src={win} ref={winRef} />
      <WinStateProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main onClaim={onWin} />} />
            <Route exact path="/result" element={<Result />} />
            <Route exact path="/claim" element={<Claim />} />
            <Route exact path="/fail" element={<Fail />} />
          </Routes>
        </Router>
      </WinStateProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
