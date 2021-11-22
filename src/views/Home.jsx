import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";

function Home() {
  return (
    <div>
      <Header size="h3" title="Приложение для создания каталога преподавателей" />
      <Link to="/teachers">Список преподавателей</Link>
      <br />
      <Link to="/form">Форма добавления нового преподавателя</Link>
    </div>
  );
}

export { Home };
