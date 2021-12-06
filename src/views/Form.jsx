import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { addTeacher } from "../api/teachers";
import { ThemeContext } from "../App";

const StyledButton = styled(Button)`
  background-color: ${({ background }) => {
    console.log("background", background);
    return background;
  }};
  margin-top: ${({ marginTop }) => {
    console.log("marginTop", marginTop);
    return marginTop;
  }};
`;

const P = styled.p`
  color: #cc00dd;
`

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) {
      // if true
      console.log("1");
    } else {
      // if false
      console.log("2");
      rendered.current = true;
    }
  }, [name, surname, description]);

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
    <form onSubmit={handleSubmit} style={{ backgroundColor: theme.background }}>
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
      <P>Hi everyone</P>
      <StyledButton
        type="submit"
        name="Добавить преподавателя 1"
        background="#cc00cc"
        marginTop="20px"
      />
    </form>
  );
}

export default Form;
