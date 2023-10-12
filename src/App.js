import "./App.css";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Speakerinfo from "./pages/Speakerinfo";
// import Teaminfo from './pages/Teaminfos';
import Footer from "./pages/Footer";

import Navigation from "./pages/nav";

import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import Team from "./pages/team";
import Error from "./pages/error";
import endFooter from "./pages/endfooter";

function App() {
  return (
    <div className="App">
      
      <Navigation />

      <Routes>
        <Route path="/"  element={<Homepage></Homepage>}></Route>

        <Route path="/registration" element={<Registration></Registration>}>
          {" "}
        </Route>

        <Route path="/speaker" element={<Speakerinfo></Speakerinfo>}></Route>

        <Route path="/team" element={<Team></Team>}></Route>

      
        <Route path="/error_404" element={<Error />} />
        <Route path="*" element={<Navigate to="/error_404" />} />
      </Routes>

      <Footer></Footer>
      {/* <endFooter></endFooter> */}
    </div>
  );
}

export default App;
