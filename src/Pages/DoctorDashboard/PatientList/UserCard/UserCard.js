import { Button, Col, Row } from "antd";
import React, { useState, useContext } from "react";
import classes from "./UserCard.module.css";
// import patient from "../../../../assets/patinett.svg"
import { useNavigate } from "react-router-dom";
import ModalAddDocument from "../ModalAddDocument/ModalAddDocument";
import { DeleteOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../../../context/GlobalContext";
import axios from "axios"
const UserCard = (props) => {
  const navigate = useNavigate();
  const { user, index } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addDocumentToPatient = () => {
    setIsModalOpen(true);
  };
  const { setDashboardItems } = useContext(GlobalContext);
  const deletePatient=()=>{
    axios.delete(`http://127.0.0.1:5000/patients/${user?.id}`).then(()=>{
      window.location.reload()
    })
  }
  return (
    <>
      <ModalAddDocument
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        user={user}
      />
      <Col xs={7} index={index} className={classes.card}>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span className={classes.age}>{user.age}ans</span>
          {/* {
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                color: "#E00000",
                backgroundColor: "#FFEFEF",
                padding: "0.5rem",
                border: "1px solid #E00000",
                borderRadius: "0.3rem",
              }}
              onClick={deletePatient}
            />
          } */}
        </Row>
        <Row
          style={{
            marginBlock: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: "100%",
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#F2F2F2", height: "2rem", marginRight: "1rem" }}
          />{" "}
          <span className={classes.email}>
            {user.nom} {user.prenom}
          </span>
        </Row>
        <span
          style={{
            display: "block",
            width: "100%",
            borderTop: "#E7E7E7 solid 1px",
          }}
        ></span>
        <Row style={{ textAlign: "left", width: "100%", marginBlock: "1rem" }}>
          <span className={classes.email}>{user?.email}</span>
        </Row>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Button
            className={classes.btnAccess}
            onClick={() => {
              setDashboardItems("patient");
              sessionStorage.setItem("user",JSON.stringify(user))
             
            }}
          >
            Accéder
          </Button>
          <Button className={classes.btnAccess} onClick={addDocumentToPatient}>
            Ajouter un document
          </Button>
        </Row>
      </Col>
    </>
  );
};

export default UserCard;
