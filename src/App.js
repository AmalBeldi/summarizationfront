import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import DoctorDashboard from "./Pages/DoctorDashboard/DoctorDashboard";
import GraphVisualisation from "./Pages/GraphVisualisation/GraphVisualisation"
import AppContext from "./context/AppContext";

function App() {
  return (
    <div className="App">
    <AppContext>

      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/graph" element={<GraphVisualisation />} />

          

        </Routes>
      </Router>
    </AppContext>

    </div>
  );
}

export default App;
