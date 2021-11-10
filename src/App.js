import React from "react";

import { Section } from "./components/Section";
import { Header } from "./components/Header/Header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header size="h1" title="Учим React" />
        <Section />
      </div>
    );
  }
}

export default App;
