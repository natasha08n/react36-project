import React from "react";

import { Button } from "./Button/Button";
import { Header } from "./Header/Header";
import { Form } from "./Form";
import { List } from "./List";
import { getTeachers, addTeacher, deleteTeacher } from "../api/teachers";

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
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const items = await getTeachers();
      this.setState({ items });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleToggle = () => {
    this.setState((prevState) => ({ showed: !prevState.showed }));
  };

  handleAddItem = async (item) => {
    try {
      const res = await addTeacher(item);

      this.setState((prevState) => ({
        items: [...prevState.items, res],
      }));
    } catch (error) {
      alert(error.toString());
    }
  };

  handleDeleteItem = (id) => {
    deleteTeacher(id)
      .then(() => {
        this.setState((prevState) => ({
          items: prevState.items.filter((i) => i.id !== id),
        }));
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  render() {
    const { items, loading } = this.state;

    return (
      <>
        <Header size="h2" title="Список преподавателей" />
        {loading && <p>Loading...</p>}
        {items.length > 0 && (
          <List items={this.state.items} deleteItem={this.handleDeleteItem} />
        )}
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
