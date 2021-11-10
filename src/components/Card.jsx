function Card({ id, name = "No name", surname, description }) {
  const handleClick = () => {
    alert(name);
  };

  return (
    <div>
      <p key={id}>{name} {surname}</p>
      <p key={id}>О преподавателе: {description}</p>

      <button onClick={handleClick}>Посмотреть имя в алерте</button>
    </div>
  );
}

export { Card };
