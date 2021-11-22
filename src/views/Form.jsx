import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { addTeacher } from "../api/teachers";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

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

  const onSubmit = async (item) => {
    try {
      await addTeacher(item);
      navigate("/teachers");
    } catch (error) {
      alert(error.toString());
    }
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
