import { useParams,useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { useFetch } from "../hooks/useFetch";

function Teacher() {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = useFetch(id);

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

export { Teacher };
