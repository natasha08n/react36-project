import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

function Teacher() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { item: teacher, loading } = useFetch(id);

  if (loading) {
    return <Loading />;
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
