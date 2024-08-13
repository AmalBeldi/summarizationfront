import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import { Col, Row, Input } from "antd";
import Loader from "../../../Components/Loader/Loader";

const PatientList = () => {
  const [listUsers, setListUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchText, setSearchText] = useState(""); // Ajout d'un état pour le texte de recherche

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/patients").then((res) => {
      setListUsers(res.data);
      setLoader(false);
    });
  }, []);

  const filterUsers = () => {
    const searchTextLowerCase = searchText.toLowerCase();

    if (!searchText.trim()) {
      return listUsers;
    }

    return listUsers.filter(
      (user) =>
        (user.nom && user.nom.toLowerCase().includes(searchTextLowerCase)) ||
        (user.prenom &&
          user.prenom.toLowerCase().includes(searchTextLowerCase)) ||
        (user.email && user.email.toLowerCase().includes(searchTextLowerCase))
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {!loader && (
        <Col
          style={{ marginTop: "5rem", fontSize: "1.5rem", fontWeight: "600" }}
        >
          <span>Liste des patients</span>
        </Col>
      )}

      {loader ? (
        <Loader />
      ) : (
        <Row
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {/* <Input.Search
            onSearch={(value) => setSearchText(value)}
            placeholder="Rechercher un patient"
            onChange={(e) => {
              if (e.target.value === "") {
                setSearchText("");
              }
            }}
          /> */}

          {filterUsers().map((user, index) => (
            <UserCard key={index} user={user} index={index} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default PatientList;
