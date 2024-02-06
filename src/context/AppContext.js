import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import { Form } from "antd";

const AppContext = (props) => {
  const [selectedType, setSelectedType] = useState("");
  const [form] = Form.useForm();
  const [dashboardItems, setDashboardItems] = useState("default");
  const [patientInfo, setPatientInfo] = useState(
    sessionStorage.getItem("patientInfo")
      ? JSON.parse(sessionStorage.getItem("patientInfo"))
      : {}
  );
  const [loading, setLoading] = useState(false);

  const handleCardClick = (name) => {
    setSelectedType(name);
  };

  return (
    <GlobalContext.Provider
      value={{
        form,
        handleCardClick,
        selectedType,
        patientInfo,
        setPatientInfo,
        dashboardItems,
        setDashboardItems,
        loading,setLoading
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
