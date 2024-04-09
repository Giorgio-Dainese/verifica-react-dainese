import { CiLogin as Login } from "react-icons/ci";
import { useState } from "react";
import Select from "react-select";

import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";

const options = [
  { value: "ALTA", label: "Alta" },
  { value: "MEDIA", label: "Media" },
  { value: "BASSA", label: "Bassa" }
];

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    titolo: "",
    dataDiScadenza: "",
    priorita: ""
  });

  const onChange = (event, key) => {
    // const value = event.target !== undefiend ? event.target.value : event.value;
    let value = "";

    if (event.target !== undefined) {
      value = event.target.value;
    } else {
      value = event.value;
    }

    setTodo({
      ...todo,
      [key]: value
    });
  };

  console.log(todo);

  return (
    <>
      <Header title="Dashbaord" icon={<Login />} to="/login" />
      <Card>
        <div className="w-full flex justify-between items-center">
          <div>
            <h1>Todo Done</h1>
            <h4>keep it up</h4>
          </div>
          <div>{todos.length}</div>
        </div>
      </Card>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="w-2/6">
          <Input type="text" placeholder="Inserisci il task" value={todo.titolo} onChange={e => onChange(e, "titolo")} />
          <Input type="date" placeholder="Inserisci la data di scadenza" value={todo.dataDiScadenza} onChange={e => onChange(e, "dataDiScadenza")} />
          <Select options={options} placeholder="Scegli la priorita" className="mt-2" onChange={e => onChange(e, "priorita")} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
