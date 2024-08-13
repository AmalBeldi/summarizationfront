import React from "react";
import classes from "./Rectangle.module.css";
import { Button, Col, Modal, Row } from "antd";
const Rectangle = ({ summmary,open,setOpen }) => {


  return (
    <Modal
      open={open}
      className={classes.ModalSuccess}
      closeIcon={false}
      width={700}
        onCancel={() => setOpen(false)}
      footer={null}
    >
      <Row className={classes.modalRow}>
        <Col className={classes.Felicitations}>
          <span>
          {summmary}
          </span>
        </Col>

      
        <Col>
          <Button
            className={classes.buttonStyle}
            onClick={() => {
             setOpen(false)
            }}
          >
           OK
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};
export default Rectangle;
