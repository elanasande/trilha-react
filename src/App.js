import './App.css';
import {Input} from './components/Input';
import {List} from './components/List';
import {Pagination} from './components/Pagination';
import {useState} from "react";

function App() {
  const [value, setValue] = useState("Lana");
  return (
    <div className="App">
      <h1>Task list</h1>

      <Input value={value}
      onChange = {(event) => setValue(event.target.value)}/>

      <button>Adicionar task</button>

      <div>
        {value}
      </div>
      <List />

      <Pagination page="8" />
    </div>
  );
}


export default App;
