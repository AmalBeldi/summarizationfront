import { Button, Col, Modal, Row, notification } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import classes from "./ModalAddDocument.module.css";
import axios from "axios";
const ModalAddDocument = (props) => {
  const { isModalOpen, setIsModalOpen, user } = props;
  const [files, setFiles] = useState([]);

  const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const uploadFiles = () => {
    files.fileList.map((file) => {
      let f = new FormData();
      f.append("document_file", file.originFileObj);
      f.append("email", user.email);
      f.append("document_name", file.name);

      axios
        .post("http://127.0.0.1:5000/add_document", f, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          notification.success({
            message: `Document ${file.name} ajouté avec succés.`,
          });
        });
    });
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
    >
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Col
          style={{ marginTop: "2rem", fontSize: "1.5rem", fontWeight: "600" }}
        >
          <span>
            Ajouter documents pour le patient {user.nom} {user.prenom}{" "}
          </span>
        </Col>
        <Dragger
          onChange={(e) => {
            const fileType = e.file.type;
            // const acceptedTypes = [
            //   "image/png",
            //   "image/jpeg",
            //   "application/pdf",
            //   "application/csv"
            // ];

            // if (!acceptedTypes.includes(fileType)) {
            //   notification.error({
            //     message: "Erreur",
            //     duration: 4,
            //     closable: true,
            //     description: "Type Fichier non valide.",
            //   });
            //   return false; // Prevent the file from being uploaded
            // } else {
              //   handleChange1(e, type);
              setFiles(e);
            // }
          }}
          customRequest={dummyRequest}
          accept="image/png, image/jpeg, application/pdf"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Cliquez ici ou bien drag-and-drop vos documents.
          </p>
        </Dragger>
        <Button onClick={uploadFiles} className={classes.btnAdd}>
          Ajouter Document(s)
        </Button>
      </Row>
    </Modal>
  );
};

export default ModalAddDocument;
