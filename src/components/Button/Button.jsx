import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  render() {
    const { name, type } = this.props;

    return (
      <button type={type} className={styles.base} onClick={this.handleAdd}>
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  name: "Добавить",
};

export { Button };
