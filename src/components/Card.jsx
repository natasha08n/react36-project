import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, name, surname, description, handleDelete }) {
  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <div>
      <Link to={`/teachers/${id}`}>
        {name} {surname}
      </Link>
      {description && <p>О преподавателе: {description}</p>}
      {!description && <p>Нет информации</p>}

      <button onClick={onDelete}>Удалить</button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleDelete: PropTypes.func,
};

export { Card };
