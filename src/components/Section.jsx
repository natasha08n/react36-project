import React from "react";

import { Button } from "./Button/Button";
import { Header } from "./Header";
import { Form } from "./Form";
import { List } from "./List";

/**
 * Section { items }
 *  Form
 *    Input (3)
 *    Button
 *  List
 *    ListItem
 */

class Section extends React.Component {
  state = {
    showed: true,
    items: [],
  };

  componentDidMount() {
    const itemsLS = JSON.parse(localStorage.getItem("teachers"));
    if (itemsLS) {
      this.setState({ items: itemsLS });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("teachers", JSON.stringify(this.state.items));
  }

  handleToggle = () => {
    this.setState((prevState) => ({ showed: !prevState.showed }));
  };

  handleAddItem = (item) => {
    this.setState((prevState) => ({ items: [...prevState.items, item] }));
  };

  render() {
    return (
      <>
        <Header size="h2" title="Список преподавателей" />
        <List items={this.state.items} />
        <br />
        <Button
          name={this.state.showed ? "Скрыть форму" : "Показать форму"}
          onClick={this.handleToggle}
        />
        <hr />

        <br />

        {this.state.showed ? <Form onSubmit={this.handleAddItem} /> : null}
      </>
    );
  }
}

export { Section };
