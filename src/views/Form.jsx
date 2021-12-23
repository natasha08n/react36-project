import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { ThemeContext } from "../App";
import { addTeacher } from "../store/operations/teachers";
import { updateDraftTeacher } from "../store/draftTeacher";
import { getDraftTeacher } from "../store/selectors/draftTeacher";

const StyledButton = styled(Button)`
  background-color: ${({ background }) => {
    return background;
  }};
  margin-top: ${({ marginTop }) => {
    return marginTop;
  }};
`;

const P = styled.p`
  color: #cc00dd;
`;

function Form() {
  const { name, surname, description } = useSelector(getDraftTeacher);
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, surname, description });
  };

  const onSubmit = async (item) => {
    try {
      dispatch(addTeacher(item));
      navigate("/teachers");
    } catch (error) {
      alert(error.toString());
    }
  };

  const handleNameUpdate = (name) => {
    dispatch(updateDraftTeacher({ name }));
  };

  const handleSurnameUpdate = (surname) => {
    dispatch(updateDraftTeacher({ surname }));
  };

  const handleDescriptionUpdate = (description) => {
    dispatch(updateDraftTeacher({ description }));
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: theme.background }}>
      <Input
        name="name"
        labelName="Name"
        value={name}
        onChange={handleNameUpdate}
      />
      <Input
        name="surname"
        labelName="Surname"
        value={surname}
        onChange={handleSurnameUpdate}
      />
      <Input
        isTextArea
        name="description"
        labelName="Description"
        value={description}
        onChange={handleDescriptionUpdate}
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
