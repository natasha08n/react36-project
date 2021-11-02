import { Button } from "./components/Button";
import { Card } from "./components/Card";
import "./App.css";

const teachers = [
  {
    id: "1",
    name: "Nataly",
  },
  {
    id: "2",
    name: "Kate",
  },
  {
    id: "3",
    name: "Eduard",
  },
  {
    id: "4",
    name: undefined,
  },
];

function App() {
  return (
    <div className="App">
      {teachers.map((teacher) => (
        <Card key={teacher.id} id={teacher.id} name={teacher.name} />
      ))}
      <Button name="Добавить преподавателя" />
      <Button />
    </div>
  );
}

export default App;
