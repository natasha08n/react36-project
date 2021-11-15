import "./styles.css";

function Header({ title, size }) {
  return (
    <>
      {size === "h1" ? (
        <h1 className="title">{title}</h1>
      ) : size === "h2" ? (
        <h2 className="title">{title}</h2>
      ) : (
        <h3 className="title">{title}</h3>
      )}
    </>
  );
}

export { Header };
