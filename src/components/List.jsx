import { Card } from "./Card";

function List({ items = [] }) {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          surname={item.surname}
          description={item.description}
        />
      ))}
    </>
  );
}

export { List };
