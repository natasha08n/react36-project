import { Component } from "react";

class Header extends Component {
  render() {
    const { title, size } = this.props;

    return (
      <>
        {size === "h1" ? (
          <h1>{title}</h1>
        ) : size === "h2" ? (
          <h2>{title}</h2>
        ) : (
          <h3>{title}</h3>
        )}
      </>
    );
  }
}

export { Header };
