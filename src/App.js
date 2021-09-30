import React, { useEffect, useState } from "react";
import axios from "axios";

import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";

const URL = "http://localhost:3011/";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios(URL+"tasks").then((response) =>
      setTasks(response.data)
    );
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  async function handleClick() {
    if (value) {
      await axios.post(URL+"tasks", {
        title: value,
      });

      setValue("");

      const response = await axios(URL+"tasks");

      setTasks(response.data);
    }
  }

  return (
    <div className="App">
      <h1>Task list</h1>

      <Input
        placeholder="Digite sua task"
        value={value}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Adicionar task</button>

      <List tasks={tasks} />

      <Pagination page="1" />
    </div>
  );
}

export default App;