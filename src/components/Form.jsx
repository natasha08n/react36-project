import { useState, useEffect } from "react";

import { Input } from "./Input/Input";
import { Button } from "./Button/Button";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("useEffect as componentDidMount");
    window.addEventListener("scroll", onScroll, false);

    return () => {
      console.log("useEffect as componentWillUnmount");
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  const onScroll = () => {
    console.log("scroll happened");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, surname, description });
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setSurname("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" labelName="Name" value={name} onChange={setName} />
      <Input
        name="surname"
        labelName="Surname"
        value={surname}
        onChange={setSurname}
      />
      <Input
        type="textarea"
        name="description"
        labelName="Description"
        value={description}
        onChange={setDescription}
      />
      <Button type="submit" name="Добавить преподавателя" />
    </form>
  );
}

export { Form };
