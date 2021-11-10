import { Component } from "react";

import "./styles.css";

class Header extends Component {
  render() {
    const { title, size } = this.props;

    /**
     * a1 === a2 ? / if true / : / if false /
     * 
     * a1 === a2 ? / if true / ? a1 === a3 ? / if true / : / if false /
     */

    return (
      <>
        {size === "h1" ? (
          <h1 className="title">{title}</h1>
        ) : size === "h2" ? (
          <h2 className="title">{title}</h2>
        ) : (
          <h3 className="title">{title}</h3>
        )}
      </>
    );
  }
}

export { Header };
