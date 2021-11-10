import { Component } from "react";

import "./styles.css";

class Input extends Component {
  static defaultProps = {
    type: "input",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.props.onChange({ value, name });
  };

  render() {
    const { labelName, name, value, type } = this.props;

    return (
      <div>
        <label>
          {labelName}
          {type === "input" ? (
            <input
              name={name}
              type="text"
              value={value}
              onChange={this.handleChange}
              className="input"
            />
          ) : (
            <textarea name={name} value={value} onChange={this.handleChange} />
          )}
        </label>
      </div>
    );
  }
}

export { Input };
