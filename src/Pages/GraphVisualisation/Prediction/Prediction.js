// import { Form, Modal, Row, message, notification } from "antd";
// import React, { useContext } from "react";
// import InputComponent from "../../../Components/InputComponent/InputComponent";
// import GlobalContext from "../../../context/GlobalContext";
// import { Heart } from "../../../Components/Icons/Icons";
// import classes from "./Prediction.module.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const Prediction = (props) => {
//   // const { form } = useContext(GlobalContext);

//   const { predictPatient, setPredictPatient } = props;
//   const handleCancel = () => {
//     setPredictPatient(false);
//   };

//   const radioValues = [
//     {
//       name: "Heart Diseses",
//       card: true,
//       cardImage: <Heart />,
//     },

//     // Add more items as needed
//   ];
// const navigate=useNavigate()
//   const PredictFunction = () => {
//     // let input_data = {
//     //     input_data: [
//     //       parseInt(form.getFieldsValue()["age"]),
//     //       parseInt(form.getFieldsValue()["ca"]),
//     //       parseInt(form.getFieldsValue()["chol"]),
//     //       parseInt(form.getFieldsValue()["cp"]),
//     //       parseInt(form.getFieldsValue()["exang"]),
//     //       parseInt(form.getFieldsValue()["fbs"]),
//     //       parseInt(form.getFieldsValue()["oldpeak"]),
//     //       parseInt(form.getFieldsValue()["restecg"]),
//     //       parseInt(form.getFieldsValue()["sexe"]),
//     //       parseInt(form.getFieldsValue()["slope"]),
//     //       parseInt(form.getFieldsValue()["thal"]),
//     //       parseInt(form.getFieldsValue()["thalach"]),
//     //       parseInt(form.getFieldsValue()["trestbps"]),
//     //     ],
//     //   };
//     // axios.post(`/predict`, JSON.stringify(input_data),
//     // {headers: {
//     //     'Content-Type': 'application/json',
//     //   }}
//     // ).then((res) => {
//     //     notification.success({
//     //         message:res.data.prediction
//     //       })
//     //     // navigate("/graph")
//     // });
//   };
//   return (
//     <Modal
//       open={predictPatient}
//       onOk={handleCancel}
//       onCancel={handleCancel}
//       width={1000}
//       x
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <Form layout="vertical" onFinish={PredictFunction} >
//         <h3>Predict diseases</h3>

//         <Row gutter={24}>
//           <InputComponent
//             inputType="radio"
//             name="typePrediction"
//             radioValues={radioValues}
//             defaultValue="Heart Diseses"
//             collg={24}
//           />
//           <InputComponent
//             name="age"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="Âge"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="sexe"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="sexe"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="cp"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="cp"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="trestbps"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="trestbps"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="chol"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="chol"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             type="number"
//             colxs={24}
//           />
//           <InputComponent
//             name="fbs"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="fbs"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="restecg"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="restecg"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="thalach"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="thalach"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="exang"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="exang"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="oldpeak"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="oldpeak"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="slope"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="slope"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="ca"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="ca"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />
//           <InputComponent
//             name="thal"
//             required={true}
//             messageRemplissage="Veuillez remplir ce champ."
//             label="thal"
//             size="large"
//             //   className={classes.label}
//             inputType="input"
//             collg={12}
//             colMd={12}
//             colxs={24}
//             type="number"
//           />{" "}
//         </Row>
//         <button className={classes.loginBtn} type="submit">
//           Predict
//         </button>
//       </Form>
//     </Modal>
//   );
// };

// export default Prediction;

import React from 'react'

const Prediction = () => {
  return (
    <div>Prediction</div>
  )
}

export default Prediction
