import { Card } from "./Card";

function List({ items = [], deleteItem = () => {} }) {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          surname={item.surname}
          description={item.description}
          handleDelete={deleteItem}
        />
      ))}
    </>
  );
}

export { List };
