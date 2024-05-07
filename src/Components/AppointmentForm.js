import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import openCems from "../Assets/opencems.png"
import axios from "axios"

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate=useNavigate()
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [patientGender, setPatientGender] = useState("default");
  // const [appointmentTime, setAppointmentTime] = useState("");
  // const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  let mailregex=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    // Validate form inputs
    const errors = {};
    if (!Email.trim()) {
      errors.patientName = "Email est obligatoire";
    } else if (mailregex.test(Email.trim())===false) {
      errors.patientName = "Veuillez vérifier votre email.";
    }

    // if (!patientNumber.trim()) {
    //   errors.patientNumber = "Patient phone number is required";
    // } else if (patientNumber.trim().length !== 10) {
    //   errors.patientNumber = "Patient phone number must be of 10 digits";
    // }

    // if (patientGender === "default") {
    //   errors.patientGender = "Please select patient gender";
    // }
    // if (!appointmentTime) {
    //   errors.appointmentTime = "Appointment time is required";
    // } else {
    //   const selectedTime = new Date(appointmentTime).getTime();
    //   const currentTime = new Date().getTime();
    //   if (selectedTime <= currentTime) {
    //     errors.appointmentTime = "Please select a future appointment time";
    //   }
    // }
    // if (preferredMode === "default") {
    //   errors.preferredMode = "Please select preferred mode";
    // }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
   
    setFormErrors({});

    axios
    .post(`http://127.0.0.1:5000/login`, {
      email:Email,
      password: password,
      role:"User",
    })
    .then((response) => {
      sessionStorage.setItem("token", response.data.access_token);


          navigate("/DoctorDashboard");

    })
    .catch((err) => console.log(err));

    
  };

  return (
    <div className="appointment-form-section">
      {/* <h1 className="legal-siteTitle">
        <Link to="/">
          OpenCEMS
        </Link>
      </h1> */}
      <div className="about-image-content">
        <img src={openCems} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="form-container">
        <h2 className="form-title">
          <span>Se connecter</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Mot de passe:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>
{/* 
          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label> */}

          <br />
          <button type="submit" className="text-appointment-btn">
            Connecter
          </button>

          {/* <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p> */}
        </form>
      </div>

      {/* <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div> */}

      {/* <ToastContainer autoClose={5000} limit={1} closeButton={false} /> */}
    </div>
  );
}

export default AppointmentForm;
