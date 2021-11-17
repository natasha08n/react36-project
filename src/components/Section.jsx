import { useState, useEffect, useCallback } from "react";

import { Button } from "./Button/Button";
import { Header } from "./Header/Header";
import { Form } from "./Form";
import { List } from "./List";
import { Example } from "./Example";
import { getTeachers, addTeacher, deleteTeacher } from "../api/teachers";

/**
 * useMemo
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

  // 1 - initial render

  useEffect(() => {
    async function fetchItems() {
      setLoading(true); // 2
      try {
        const itemsDB = await getTeachers();
        setItems(itemsDB); // 3
      } finally {
        setLoading(false); // 4
      }
    }
    fetchItems();
  }, []);

  const handleToggle = () => {
    setShowed((prevShowed) => !prevShowed);
  };

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

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
      <Example />
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
