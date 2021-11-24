import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { List } from "../components/List";
import { Loading } from "../components/Loading";
import { getTeachers, deleteTeacher } from "../api/teachers";

/**
 * useMemo
 * useContext = createContext
 * useReducer
 * ----------------------------------------------------------------
 * useLocalStorage
 */

function Teachers() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
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

  const handleDeleteItem = (id) => {
    deleteTeacher(id)
      .then(() => {
        setItems((prevItems) => prevItems.filter((i) => i.id !== id));
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  const filterItems = () => {
    setFilteredItems(items.filter((item) => item.description));
  };

  return (
    <>
      <Header size="h2" title="Список преподавателей" />
      {loading && <Loading />}
      {items.length > 0 && <List items={items} deleteItem={handleDeleteItem} />}
      <button onClick={filterItems}>Показать тех, у кого есть описание</button>
      {filteredItems.length > 0 && <List items={filteredItems} />}
      <hr />

      <br />

      <Link to="/form">Форма добавления нового преподавателя</Link>
    </>
  );
}

export default Teachers;
