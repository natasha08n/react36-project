function Card({ id, name = "No name" }) {
  const handleClick = () => {
    alert(name);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p key={id}>{name}</p>
      <button onClick={handleClick}>Посмотреть имя в алерте</button>
    </div>
  );
}

export { Card };
