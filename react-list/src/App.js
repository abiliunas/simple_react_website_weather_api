import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home.js";
import Information from "./components/pages/Information";
import {
  WebsiteList,
  Lrytas,
  Delfi,
  Lrt,
  Alfa,
  Skelbiu,
} from "./components/pages/WebsiteList";
import Exception from "./components/pages/Exception";

function App() {
  return (
    <>
      <Router>
        <Navbar scrolling dark expand="md" fixed="top" />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/websitelist" element={<WebsiteList />} />
          <Route path="/exception" element={<Exception />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/lrytas" element={<Lrytas />} />
          <Route path="/lrt" element={<Lrt />} />
          <Route path="/alfa" element={<Alfa />} />
          <Route path="/skelbiu" element={<Skelbiu />} />
          <Route path="/delfi" element={<Delfi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
