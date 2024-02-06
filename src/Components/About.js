import React from "react";
import openCems from "../Assets/opencems.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={openCems} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>À propos de nous</span>
        </h3>
        <p className="about-description">
        Bienvenue chez OpenCEMS, votre partenaire de confiance pour des soins de santé accessibles et personnalisés.
        </p>

        <h4 className="about-text-title">Vos Solutions</h4>

        <SolutionStep
          title="Ajouter vos patients et leurs documents."
          description=""
        />

        <SolutionStep
          title="Obtenir votre synthése personnalisée."
          description=""
        />

        <SolutionStep
          title="Effectuez une analyse avec efficacité et clarté."
          description=""
        />
      </div>
    </div>
  );
}

export default About;
