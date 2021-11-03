import React from "react";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import "./App.css";

const teachers = [
  {
    id: "1",
    name: "Nataly",
  },
  {
    id: "2",
    name: "Kate",
  },
  {
    id: "3",
    name: "Eduard",
  },
  {
    id: "4",
    name: undefined,
  },
];

/**
 * App
 *  Form - state: { name/surname/patronymic/description }
 *    Input - labelName, onChange, value
 */

class App extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
      <Header title="Учим React" />
        <Form />
        <br />
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {teachers.map((teacher) => (
          <Card key={teacher.id} id={teacher.id} name={teacher.name} />
        ))}
        <Button name="Добавить преподавателя" />
      </div>
    );
  }
}

export default App;
