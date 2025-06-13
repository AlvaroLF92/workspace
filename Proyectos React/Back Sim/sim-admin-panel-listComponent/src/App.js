import Header from "components/Header/Header";
import MainLayout from "layouts/MainLayout/MainLayout";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Centers from "views/Centers/Centers";
import Classes from "views/Classes/Classes";
import Formations from "views/Formations/Formations";
import Home from "views/Home/Home";
import Login from "views/Login/Login";
import Monitors from "views/Monitors/Monitors";
import NewEdit from "views/NewEdit/NewEdit";
import "./App.scss";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Router>
          <Routes>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Header setLoggedIn={setLoggedIn}/>
          <MainLayout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/monitors" element={<Monitors />} />
              <Route path="/newMonitor" element={<NewEdit />} />
              <Route path="/editMonitor" element={<NewEdit />} />
              <Route path="/centers" element={<Centers />} />
              <Route path="/newCenter" element={<NewEdit />} />
              <Route path="/editCenter" element={<NewEdit />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/newClass" element={<NewEdit />} />
              <Route path="/editClass" element={<NewEdit />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/newFormation" element={<NewEdit />} />
              <Route path="/editFormation" element={<NewEdit />} />
            </Routes>
          </MainLayout>
        </Router>
      )}
    </div>
  );
}

export default App;
