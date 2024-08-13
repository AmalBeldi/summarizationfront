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
const avance = ["avancée", "date", "création", "creation", "début", "fin"];
const contenu = ["contenu", "besoins"];
const resume = ["résumé", "resume", "resumé", "résume"];
const operation = ["Opération", "opération", "operation", "Operation"];
const versionnage = ["versionnage", "versionning", "vérsionnage"];

const steps = [
  {
    id: 1,
    message: "BONJOUR",
    trigger: 2,
  },
  {
    id: 2,
    message: "SI VOUS AVEZ BESOIN VOUS POUVEZ NOUS ECRIRE",
    user: true,
    trigger: ({ value }) => {
      const lowercasedValue = value.toLowerCase();
      if (basique.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
        return 3;
      } else if (avance.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
        return 4;
      } else if (contenu.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
        return 5;
      } else if (resume.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
        return 7;
      } else if (operation.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
        return 11;
      } else if (versionnage.some((word) => lowercasedValue.includes(word.toLowerCase()))) {
        return 10;
      } else {
        return 'default';
      }
    },
  },
  {
    id: 3,
    message: "La synthèse basique c'est de synthétiser les documents selon le type.",
    trigger: 2,
  },
  {
    id: 4,
    message: "La synthèse avancée c'est de synthétiser le dossier médical en fonction des attributs tels que la date.",
    trigger: 2,
  },
  {
    id: 5,
    message: "La synthèse basée sur le contenu c'est de synthétiser le contenu du document en fonction des besoins de l'utilisateur.",
    trigger: 2,
  },
  {
    id: 7,
    message: "Graphe résumé: il capture les caractéristiques essentielles du DG, tout en réduisant sa complexité et sa taille. Le résumé du graphe implique de sélectionner un sous-ensemble des sommets et des arêtes du DG, tout en maintenant la structure globale et la connectivité du graphe d’origine.",
    trigger: 2,
  },
  {
    id: 11,
    message: "Une Opération (O) est une fonction dans le Graphe résumé définissant comment les noeuds résumés peuvent être générés pour répondre aux besoins des utilisateurs, tels que l’affichage, le filtrage, la transformation, le calcul, l'extraction, l'abstraction et la synthèse à base d'open ai.",
    trigger: 2,
  },
  {
    id: 10,
    message: "Le versionnage de résumé est un processus de création et de maintien de différentes versions ou instantanés d'un résumé de graphe à différents moments dans le temps, permettant aux utilisateurs de suivre et d'analyser les changements du graphe de données au fil du temps.",
    trigger: 2,
  },
  {
    id: 'default',
    message: "Je n'ai pas compris votre demande. Pouvez-vous reformuler ?",
    trigger: 2,
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
