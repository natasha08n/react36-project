import { Component } from "react";
import { Input } from "./Input";
import { Button } from "./Button/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      description: "",
    };
  }

  handleChange = ({ value, name }) => {
    this.setState({ [name]: value }); // this.setState(newState) - { ...prevState, ...newState }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      surname: "",
      description: "",
    });
  };

  render() {
    console.log("render");
    const { name, surname, description } = this.state;

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
