import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  render() {
    const { name, type, onClick } = this.props;

    return (
      <button type={type} className={styles.base} onClick={onClick}>
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  name: "Добавить",
};

export { Button };
