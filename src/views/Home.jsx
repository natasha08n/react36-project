import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { ThemeContext } from "../App";

function Home() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.background }}>
      <Header
        size="h3"
        title="Приложение для создания каталога преподавателей"
      />
      <Link to="/teachers">Список преподавателей</Link>
      <br />
      <Link to="/form">Форма добавления нового преподавателя</Link>
    </div>
  );
}

export { Home };
