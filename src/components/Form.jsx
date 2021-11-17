import { useState } from "react";

import { Input } from "./Input/Input";
import { Button } from "./Button/Button";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState("");

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
