import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header";

// ------------------------STYLES-----------------

import "./Styles/responsive.css";
import "./Styles/measurement.css";
import "./Styles/colors.css";
import "./Styles/Components/header.css";
import "./Styles/Components/home.css";
import "./Styles/Components/quicklink.css";
import "./Styles/Components/card.css";
import "./Styles/Components/single.css";
import "./Styles/Components/cricketSingleMatch.css";
import { SingleGameCard } from "./Components/Heighlights";
import SingleGame from "./Pages/SingleGame";
import CricketSingleMatch from "./Pages/SingleGame/CricketSingleMatch";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/game" element={<SingleGame />}></Route>
          <Route
            path="/cricket-single"
            element={<CricketSingleMatch />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
