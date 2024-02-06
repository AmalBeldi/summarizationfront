import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Nos services</span>
        </h3>
        <p className="info-description">
          Notre plateforme offre aux médecins une solution complète pour la
          gestion de leurs patients, combinant une interface conviviale avec des
          fonctionnalités puissantes.
        </p>
      </div>

      <div class="services-container">
    <div class="service-line">
        <div class="service-icon">🕒</div>
        <div class="service-text">
            <strong>Modélisation Innovante de Données Médicales :</strong> Transformez efficacement des bases de données médicales hétérogènes en graphes de données, simplifiant ainsi la gestion administrative et permettant de consacrer plus de temps à vos patients.
        </div>
    </div>

    <div class="service-line">
        <div class="service-icon">🔬</div>
        <div class="service-text">
            <strong>Synthèse Dynamique de Graphes de Données :</strong> Offrez une visualisation intelligente des informations les plus pertinentes en combinant des techniques de synthèse de données médicales et de visualisation de graphes, permettant une analyse avancée et des diagnostics plus précis.
        </div>
    </div>

    <div class="service-line">
        <div class="service-icon">📁🧠</div>
        <div class="service-text">
            <strong>Documentation Médicale Intelligente :</strong> Ajoutez des documents médicaux en quelques clics et laissez notre plateforme extraire automatiquement les données pertinentes, simplifiant ainsi le processus de documentation médicale.
        </div>
    </div>

    <div class="service-line">
        <div class="service-icon">📊🔄</div>
        <div class="service-text">
            <strong>Graphes Dynamiques :</strong> Explorez vos données à travers des graphes interactifs, offrant une perspective visuelle de vos patients et facilitant la compréhension des informations médicales.
        </div>
    </div>
</div>


      {/* <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />
      </div> */}
    </div>
  );
}

export default Info;
