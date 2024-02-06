import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const config = {
  width: "700px",
  height: "400px",
  floating: true,
  background: "#f5f8fb",
};

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#2d6c8c",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#2d6c8c",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const basique = ["synthèse basique", "basique", "type"];
const avance = ["avancée", "date", "création", "creation", "début","fin"];
const contenu = ["contenu", "besoins"];
const devis = ["devis", "Devis", "DEVIS", "devi", "Devi", "DEVI", "remise", "remis", "Remise", "REMISE", "REMIS"];
const consultation = ["consultation", "Consultation", "consul", "consulter", "consultat", "rendez-vous", "Rendez-vous", "rendezvous", "rdv", "RDV", "RENDEZVOUS", "CONSULTATION"];
const category = ["category", "catégorie", "categorie", "catégori", "categori", "Catégorie", "CATEGORIE", "CATEGORY"];
const livraison = ["livraison", "livrason", "Livriason", "LIVRAISON", "delivery", "Delivery", "DELIVERY", "durée", "time", "jours", "livrasion", "temps"];
const domaine = ["domaine", "specialisée", "spécial", "domain", "Domaine", "DOMAINE", "vend", "secteur", "activité", "MAFI", "mafi", "qui est", "quelle est"];
const bonjour = ["bonjour", "Bonjour", "BONJOUR", "slu", "salut", "hi", "hello", "good morning", "bnj", "bnjr", "bonjou"];

const steps = [
  {
    id: 1,
    message: "BONJOUR ",
    options: [
      { value: 1, label: 'au revoir chatboot', trigger: '6' },
    ],
    trigger: 2,
  },
  {
    id: 2,
    message: "SI VOUS AVEZ BESOIN VOUS POUVEZ NOUS ECRIRE",
    user: true,
    options: [
      { value: 1, label: 'au revoir chatboot', trigger: 6 },
    ],
    trigger: ({ value }) => {
        const lowercasedValue = value.toLowerCase();
        if (basique.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 3;
        } else if (avance.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 4;
        } else if (contenu.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 5;
        } else if (devis.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 'demandeDevis';
        } else if (consultation.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 'demandeConsultation';
        } else if (category.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 'categorie';
        } else if (livraison.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 'livraison';
        } else if (bonjour.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 'salutation';
        } else if (domaine.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
          return 'domaine';
        } else {
          return 'default';
        }
      },
  },
  {
    id: 3,
    message: `La synthèse basique c'est de synthétiser les documents selon le type.`,
    trigger: 2,
  },
  {
    id: 4,
    message:
      "La synsthèse avancée c'est de synthétiser le dossier médical en fonction des attributs telque la date.",
    trigger: 2,
  },
  {
    id: 5,
    message:
      "La synthèse basée sur le contenu c'est de synthétiser le contenu du document en fonction des besoins de l'utilisateur.",
    trigger: 2,
  },
  {
    id: 7,
    message:
      "si vous voulez demander un devis, vous devez tout d'abord vous connecter puis cliquer sur demander un devis, choisir les produits dont vous avez besoin ainsi que leurs quantités et envoyer la demande. Nous allons vous répondre par un e-mail.",
    trigger: 2,
  },
  {
    id: 8,
    message:
      "si vous voulez demander une consultation technique, vous devez tout d'abord vous connecter puis cliquer sur demander une consultation, choisir la date, le lieu et le sujet puis envoyer la demande. Nous allons vous répondre par un e-mail.",
    trigger: 2,
  },
  {
    id: 9,
    message: "catégorie",
    trigger: 6,
  },
  {
    id: 10,
    message: "livraison",
    trigger: 2,
  },
  {
    id: 11,
    message: "merci de choisir MAFI, quelle est votre question ?",
    trigger: 2,
  },
  {
    id: 12,
    message: "domaine",
    trigger: 2,
  },
  {
    id: 6,
    message: "AU REVOIR",
  },
];

const ChatBoot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default ChatBoot;
