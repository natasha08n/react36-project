import { useContext, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { addTeacher } from "../api/teachers";
import { ThemeContext } from "../App";
import { addTeacher as addTeacherAction } from "../store/teachers";
import {
  updateDraftTeacher,
  deleteDraftTeacher,
} from "../store/draftTeacher";

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
`;

function Form() {
  const { name, surname, description } = useSelector(
    (state) => state.draftTeacher
  );
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const rendered = useRef(false);
  const dispatch = useDispatch();

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
    // clearForm();
  };

  const clearForm = () => {
    dispatch(deleteDraftTeacher());
  };

  const onSubmit = async (item) => {
    try {
      const teacher = await addTeacher(item);
      dispatch(addTeacherAction(teacher));
      navigate("/teachers");
    } catch (error) {
      alert(error.toString());
    }
  };

  const handleNameUpdate = (name) => {
    dispatch(updateDraftTeacher({ name }))
  }

  const handleSurnameUpdate = (surname) => {
    dispatch(updateDraftTeacher({ surname }))
  }

  const handleDescriptionUpdate = (description) => {
    dispatch(updateDraftTeacher({ description }))
  }

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: theme.background }}>
      <Input name="name" labelName="Name" value={name} onChange={handleNameUpdate} />
      <Input
        name="surname"
        labelName="Surname"
        value={surname}
        onChange={handleSurnameUpdate}
      />
      <Input
        type="textarea"
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
