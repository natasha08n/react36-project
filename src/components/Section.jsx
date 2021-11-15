import { useState, useEffect } from "react";

import { Button } from "./Button/Button";
import { Header } from "./Header/Header";
import { Form } from "./Form";
import { List } from "./List";
import { getTeachers, addTeacher, deleteTeacher } from "../api/teachers";

/**
 * useEffect(() => {}, []) = componentDidMount
 * useEffect(() => {}, [valueToUpdate1, valueToUpdate2, ....]) = componentDidUpdate
 * useEffect(() => { return () => {}}, []) = componentWillUnmount
 * useState = setState
 * useMemo
 * useCallback
 * useRef = createRef
 * useContext = createContext
 * useReducer
 * ----------------------------------------------------------------
 * useFetch
 * useLocalStorage
 */

function Section(props) {
  const [showed, setShowed] = useState(true);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);

      try {
        const itemsDB = await getTeachers();
        setItems(itemsDB);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  const handleToggle = () => {
    setShowed((prevShowed) => !prevShowed);
  };

  const handleAddItem = async (item) => {
    try {
      const res = await addTeacher(item);

      setItems((prevItems) => [...prevItems, res]);
    } catch (error) {
      alert(error.toString());
    }
  };

  const handleDeleteItem = (id) => {
    deleteTeacher(id)
      .then(() => {
        setItems((prevItems) => prevItems.filter((i) => i.id !== id));
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  return (
    <>
      <Header size="h2" title="Список преподавателей" />
      {loading && <p>Loading...</p>}
      {items.length > 0 && <List items={items} deleteItem={handleDeleteItem} />}
      <br />
      <Button
        name={showed ? "Скрыть форму" : "Показать форму"}
        onClick={handleToggle}
      />
      <hr />

      <br />

      {showed ? <Form onSubmit={handleAddItem} /> : null}
    </>
  );
}

export { Section };
