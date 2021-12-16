import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../components/Header";
import { List } from "../components/List";
import { Input } from "../components/Input/Input";
import { Loading } from "../components/Loading";
import { fetchTeachers, deleteTeacher } from "../store/operations/teachers";
import {
  getTeachers,
  getTeachersLoadingStatus,
} from "../store/selectors/teachers";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";
import { getTeachers as getTeachersAPI } from '../api/teachers'

/**
 * useMemo
 * useReducer
 * ----------------------------------------------------------------
 * useLocalStorage
 */

const useSearchTeachers = (initialQuery) =>
  useDebouncedSearch(initialQuery, async (query) => getTeachersAPI(query));

function Teachers() {
  let [searchParams, setSearchParams] = useSearchParams();
  const items = useSelector(getTeachers);
  const loading = useSelector(getTeachersLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSearch = (query) => {
    setSearchParams({ query });
    setQuery(query);
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteTeacher(id));
  };

  if (!items.length) {
    return (
      <>
        <Header size="h3" title="Преподавателей нет" />
        <Link to="/form">Добавить нового преподавателя</Link>
      </>
    );
  }

  return (
    <>
      <Header size="h2" title="Список преподавателей" />
      {loading && <Loading />}
      <Input
        name="search"
        labelName="Search"
        value={query}
        onChange={handleSearch}
      />
      <List items={query ? searchResults : items} deleteItem={handleDeleteItem} />
      <hr />

      <br />

      <Link to="/form">Форма добавления нового преподавателя</Link>
    </>
  );
}

export default Teachers;
