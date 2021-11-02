import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      clicked: false,
    };
  }

  handleAdd = () => {
    for (let i = 0; i < 3; i += 1) {
      console.log("before set state", this.state.clicked);

      this.setState((prev) => ({
        clicked: !prev.clicked,
      }));
      console.log("after set state", this.state.clicked);
    }
  };

  render() {
    const { name } = this.props;
    return (
      <>
        <p>{this.state.clicked.toString()}</p>
        <button type="button" onClick={this.handleAdd}>
          {name}
        </button>
      </>
    );
  }
}

Button.defaultProps = {
  name: "Добавить",
};

export { Button };
