import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <input
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          id="password_confirmation"
          type="password"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
