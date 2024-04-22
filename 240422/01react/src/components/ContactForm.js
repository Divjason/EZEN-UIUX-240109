import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };

  const getNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formname">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={getName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="전화번호를 입력해주세요"
          onChange={getNumber}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
