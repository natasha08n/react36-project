import { Component } from "react";

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <h1>{title}</h1>
    );
  }
}

export { Header };
