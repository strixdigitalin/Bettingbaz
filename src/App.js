import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// ------------------------STYLES-----------------

import "./Styles/responsive.css";
import "./Styles/measurement.css";
import "./Styles/colors.css";
import "./Styles/Components/header.css";
import "./Styles/Components/home.css";
import "./Styles/Components/quicklink.css";
import "./Styles/Components/card.css";
import "./Styles/Components/single.css";
import "./Styles/Components/modal.css";
import "./Styles/Components/cricketSingleMatch.css";
import "./Styles/Components/signinmodal.css";
import "./Styles/Components/mybet.css";
import "./Styles/Components/footer.css";
import "./Styles/Components/terms.css";
import "./Styles/Components/inplay.css";
import "./Styles/Components/staticpage.css";
import "./Styles/Components/signup.css";
import "./Styles/Components/mobdashboard.css";
import { SingleGameCard } from "./Components/Heighlights";

import SingleGame from "./Pages/SingleGame";
import CricketSingleMatch from "./Pages/SingleGame/CricketSingleMatch";
import InPlaySingleGame from "./Components/Controler/InPlayControler";
import PageCover from "./Components/PageCover";
import InPlayGame from "./Pages/InplayGame";
import { MatchByCompetition } from "./Pages/MatchByCompetition/MatchByCompetition";
import MatchByCompetitionIndex from "./Pages/MatchByCompetition";
import CompetitionByGame from "./Pages/CompetitionByGame";
import { useSelector } from "react-redux";
import PlaceBidModal from "./Modals/PlaceBidModal";
import ResetPasswordModal from "./Modals/ResetPasswordModal";
import SignIn from "./Modals/SignIn";
import MyBet from "./Pages/MyBet";
import ResetPassword from "./Redux/Reducers/ResetPassword.js";
import Footer from "./Components/Footer";
import Terms from "./Pages/Terms/Terms";
import SinglePages from "./Pages/SinglePages";
import LandingPage from "./Pages/SinglePages/LandingPage";
import MobDashboard from "./Pages/MobDashboard";
import Withdraw from "./Modals/Withdraw";
import Signup from "./Pages/Signup";
import MyAccount from "./Pages/MyAccount";

function App() {
  const { PlaceBid, SignInState, ResetPassword } = useSelector(
    (state) => state
  );
  console.log(PlaceBid, ResetPassword, "<<<< Place Bid");
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" > */}
          {/* </Route> */}
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/game" element={<SingleGame />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          {/* <Route path="/" element={<SingleGame />}></Route> */}
          <Route path="/casino" element={<SinglePages />}></Route>
          <Route path="/e-sport" element={<SinglePages />}></Route>
          <Route path="/in-play" element={<InPlayGame />}></Route>
          <Route path="/in-play/:gamename" element={<InPlayGame />}></Route>
          <Route
            path="/all-competition-by-sports/:sport"
            element={<CompetitionByGame />}
          ></Route>
          <Route
            path="/match-by-competition/sport/:game/:league/:id"
            element={<MatchByCompetitionIndex />}
          ></Route>
          <Route
            path="/match-single/sport/:game/:legue/:teams/:id"
            element={<CricketSingleMatch />}
          ></Route>
          <Route path="my-bet" element={<MyBet />}></Route>
          <Route path="my-account" element={<MyAccount />}></Route>

          <Route path="/mob-dashboard" element={<MobDashboard />}></Route>
          <Route path="/terms/:terms" element={<Terms />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {PlaceBid.show && (
        <div className="modal-outer">
          {" "}
          <PlaceBidModal />
        </div>
      )}
      {SignInState?.show && (
        <div className="modal-outer">
          {" "}
          <SignIn />
        </div>
      )}
      {ResetPassword?.show && (
        <div className="modal-outer">
          <ResetPasswordModal />
        </div>
      )}
      {SignInState?.showWithdraw && (
        <div className="modal-outer">
          <Withdraw />
        </div>
      )}
    </div>
  );
}

export default App;
