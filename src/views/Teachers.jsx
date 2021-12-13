import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../components/Header";
import { List } from "../components/List";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Loading } from "../components/Loading";
import { fetchTeachers, deleteTeacher } from "../store/operations/teachers";

/**
 * useMemo
 * useReducer
 * ----------------------------------------------------------------
 * useLocalStorage
 */

function Teachers() {
  const { items, loading } = useSelector((state) => state.teachers);
  const dispatch = useDispatch();
  // const [filteredItems, setFilteredItems] = useState(items);
  const [searchQuery, setSearchQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const handleSearch = () => {
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    setSearchParams({ search: searchQuery, name: "name" });
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteTeacher(id));
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
