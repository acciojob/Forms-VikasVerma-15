import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";

const App = () => {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
};

export default App;
