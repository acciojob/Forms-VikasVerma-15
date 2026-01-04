import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <nav>
        <Link id="form-link" to="/">Form</Link>{" | "}
        <Link id="form-ref-link" to="/ref">Form Ref</Link>{" | "}
        <Link id="form-state-link" to="/state">Form State</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ref" element={<FormRef />} />
        <Route path="/state" element={<FormState />} />
      </Routes>
    </Router>
  );
};

export default App;

