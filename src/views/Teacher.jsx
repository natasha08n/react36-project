import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "../components/Header";
import { getTeacher } from "../store/selectors/teachers";

function Teacher() {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = useSelector((state) => getTeacher(state, id));

  if (!teacher) {
    return (
      <>
        <Header size="h3" title="Преподаватель не найден" />
        <p>Для получения информации о преподавателе открой главную страницу</p>
        <Link to="/teachers">На главную</Link>
      </>
    );
  }

  return (
    <>
      <Header size="h3" title={`${teacher.name} ${teacher.surname}`} />
      <p>ID в картотеке: {teacher.id}</p>
      {teacher.description && <p>Описание: {teacher.description}</p>}
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default Teacher;
