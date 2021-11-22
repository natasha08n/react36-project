import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { Form } from "./views/Form";
import { Teachers } from "./views/Teachers";
import { Teacher } from "./views/Teacher";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<Teacher />} />
      </Routes>
    );
  }
}

export default App;
