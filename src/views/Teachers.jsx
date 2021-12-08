import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../components/Header";
import { List } from "../components/List";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Loading } from "../components/Loading";
import { getTeachers, deleteTeacher } from "../api/teachers";
import {
  setTeachers,
  deleteTeacher as deleteTeacherAction,
} from "../store/actions/teachers";

/**
 * useMemo
 * useReducer
 * ----------------------------------------------------------------
 * useLocalStorage
 */

function Teachers() {
  const items = useSelector((state) => state.teachers);
  const dispatch = useDispatch();
  // const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const itemsDB = await getTeachers();
        console.log('itemsDB', itemsDB)
        dispatch(setTeachers(itemsDB));
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [dispatch]);

  const handleSearch = () => {
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    setSearchParams({ search: searchQuery, name: "name" });
  };

  const handleDeleteItem = (id) => {
    deleteTeacher(id)
      .then(() => {
        dispatch(deleteTeacherAction(id));
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  // const filterItems = () => {
  //   setFilteredItems(items.filter((item) => item.description));
  // };

  return (
    <>
      <Header size="h2" title="Список преподавателей" />
      {loading && <Loading />}
      <Input
        name="search"
        labelName="Search"
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <Button onClick={handleSearch} name="Run Search" />
      {items.length > 0 && <List items={items} deleteItem={handleDeleteItem} />}
      {/* <button onClick={filterItems}>Показать тех, у кого есть описание</button>
      {filteredItems.length > 0 && <List items={filteredItems} />} */}
      <hr />

      <br />

      <Link to="/form">Форма добавления нового преподавателя</Link>
    </>
  );
}

export default Teachers;
