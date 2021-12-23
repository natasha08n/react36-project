import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Button } from "../components/Button/Button";
import { ThemeContext } from "../App";
import { logout } from "../store/operations/user";
import { getLoggedIn } from "../store/selectors/user";

function Home() {
  const theme = useContext(ThemeContext);
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ backgroundColor: theme.background }}>
      <Header
        size="h3"
        title="Приложение для создания каталога преподавателей"
      />
      <small>
        You are running this application in{" "}
        <b>{process.env.REACT_APP_DEFAULT_VAR}</b> mode.
      </small>
      <br />
      <Link to="/teachers">Список преподавателей</Link>
      <br />
      <Link to="/form">Форма добавления нового преподавателя</Link>
      <br />
      {isLoggedIn && <Button onClick={handleLogout} name="Выйти из аккаунта" />}
    </div>
  );
}

export { Home };
