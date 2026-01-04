import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm: confirmRef.current.value
    };

    console.log(data);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" ref={nameRef} type="text" />
        <input id="email" ref={emailRef} type="email" />
        <input id="password" ref={passwordRef} type="password" />
        <input
          id="password_confirmation"
          ref={confirmRef}
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
