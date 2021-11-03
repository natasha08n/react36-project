import { Component } from "react";
import { Input } from "./Input";
import { Button } from "./Button/Button";

class Form extends Component {
  state = {
    name: "",
    surname: "",
    patronymic: "",
    description: "",
  };

  handleChange = ({ value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("state", this.state);
  };

  render() {
    const { name, surname, patronymic, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          labelName="Name"
          value={name}
          onChange={this.handleChange}
        />
        <Input
          name="surname"
          labelName="Surname"
          value={surname}
          onChange={this.handleChange}
        />
        <Input
          name="patronymic"
          labelName="Patronymic"
          value={patronymic}
          onChange={this.handleChange}
        />
        <Input
          type="textarea"
          name="description"
          labelName="Description"
          value={description}
          onChange={this.handleChange}
        />
        <Button type="submit" name="Добавить преподавателя" />
      </form>
    );
  }
}

export { Form };
