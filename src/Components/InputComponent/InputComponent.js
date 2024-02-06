import React, { useContext } from 'react'
import {
    Checkbox,
    Col,
    DatePicker,
    Form,
    Input,
    Radio,
    Row,
    Select,
    Space,
  } from "antd";
  import classes from "./InputComponent.module.css"
import GlobalContext from '../../context/GlobalContext';
import CardComponent from '../CardComponent/CardComponent';
const InputComponent = (props) => {

  const {handleCardClick}=useContext(GlobalContext)

    const {
        required,
        messageRemplissage,
        pattern,
        label,
        name,
        type,
        messageVerification,
        size,
        className,
        controls,
        prefix,
        placeholder,
        addonAfter,
        addonBefore,
        inputType,
        namePrefix,
        options,
        onBlur,
        // form,
        defaultValue,
        radioValues,
        disabledDate,
        minVal,
        maxVal,
        maxDate,
        minDate,
        collg,
        colmd,
        colsm,
        colxs,
        restField,
        checkboxValues,
        onSelect,
        onchange,
        val,
      } = props;
  return (
   <Col lg={collg} md={colmd} sm={colsm} xs={colxs}>
     {inputType == "input" ? (
        <div>
          <Form.Item
            // {...restField}
            name={name}
            rules={[
              {
                required: required,
                message: messageRemplissage,
              },
              {
                pattern: pattern,
                message: messageVerification,
              },
            
            ]}
            label={<label className={className}>{label}</label>}
          >
            <Input

             
           
              placeholder={placeholder}
              // defaultValue={defaultValue}
              value={defaultValue}
              prefix={prefix}
              controls={controls}
              type={type}
             
             
            />
          </Form.Item>
        </div>
      ) : inputType === "phone" ? (
        <Form.Item
          name="inputphone"
          rules={[
            {
              required: required,
              message: "",
            },
          ]}
          label={<label className={className}>{label}</label>}
        >
          <Space.Compact compact="true" style={{ display: "flex" }}>
            <Form.Item
              name={namePrefix}
              style={{ flex: 1 }}
              initialValue={defaultValue}
              rules={[
                {
                  required: required,
                  message: messageRemplissage,
                },
                {
                  pattern: new RegExp(/^\+\d+$/),
                  message: "Veuillez vérifier ce champ.",
                },
              ]}
            >
              <Input style={{ borderRight: "white"   }}  />
            </Form.Item>
            <Form.Item
              name={name}
              rules={[
                {
                  required: required,
                  message: messageRemplissage,
                },
                ({ getFieldValue }) => ({
                  pattern: new RegExp(
                    getFieldValue(namePrefix) === "+33" ? pattern : /^[0-9]*$/
                  ),
                  message: messageVerification,
                }),
              ]}
              style={{ flex: 4 }}
            >
              <Input addonAfter={addonAfter} />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
      ) : inputType === "select" ? (
        <Form.Item
          name={name}
          rules={[
            {
              required: required,
              message: messageRemplissage,
            },
          ]}
          label={<label className={className}>{label}</label>}
        >
          <Select
            // onChange={(e) => onChangeFunction(e, "select")}
            onSelect={onSelect}
            options={options && options.length !== 0 ? options : ""}
            placeholder={placeholder}
          />
        </Form.Item>
      ):
      inputType === "checkbox" ? (
        <Form.Item
          name={name}
          rules={[
            {
              required: required,
              message: messageRemplissage,
            },
          ]}
          label={<label className={classes.labelStyle}>{label}</label>}
        >
          <Checkbox.Group
            
          >
            <Row
            
            >
              {checkboxValues.map((checkboxValue, index) => (
                <Col key={index}>
                  <Checkbox value={checkboxValue}>{checkboxValue}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
      ): <Form.Item
      name={name}
      label={<label>{label}</label>}
      rules={[
        {
          required: required,
          message: messageRemplissage,
        },
      ]}
    >
      <Radio.Group
       className={classes.rowFlex}
        // defaultValue={form.getFieldsValue()["typeVoiture"]}
      >
        <Row gutter={[16, 16]} style={{display:"flex",justifyContent:"space-between",textAlign:"center"}}>
          {radioValues?.map((value, index) => (
            <Col key={index} >
              {value.card ? (
                <CardComponent
                  image={value.cardImage}
                  name={value.name}
                  // form={form}
                />
              ) : null}
              <Radio
                value={value.name}
                key={index}
                onChange={() => handleCardClick(value.name)}
                className={classes.labelStyle}
              >
                {value.name}
              </Radio>
            </Col>
          ))}
        </Row>
      </Radio.Group>
    </Form.Item>
      }
   </Col> 
  )
}

export default InputComponent