import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/login");
  };

  return (
    <div className="ba-section">
      {/* <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div> */}

      <div className="ba-text-content">
        <h3 className="ba-title"> 
          <span>Pourquoi choisir DG_Summ</span>
        </h3>
        <p className="ba-description">
          Découvrez les raisons de choisir OpenCEMS pour vos besoins. Bénéficiez de commodité
          et de solutions personnalisées, faisant de votre bien-être notre
          priorité absolue. Rejoignez-nous dans un parcours vers une meilleure
          expérience professionnelle.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Meilleure expérience professionnelle
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          24/7 Support Chat
        </p>
        

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          Commencer
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
