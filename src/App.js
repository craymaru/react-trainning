import "./App.css";
import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getAnimals } from "./const/animals"

function App() {
  const [tab, setTab] = useState("list");
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    console.log("useEffect")
    fetchAnimals()
  }, [])

  const fetchAnimals = async () => {
    const animals = await getAnimals()
    setAnimals(animals)
  }

  const addAnimal = (animal) => {
    setAnimals([...animals, animal])
    setTab('list')
  }

  return (
    <div className="App">
      <header>
        <ul>
          <li onClick={() => setTab("list")}>List</li>
          <li onClick={() => setTab("form")}>Form</li>
        </ul>
      </header>
      <hr />
      {tab === "list" ? <List className="List" animals={animals}/> : <Form className="Form" onAddAnimal={addAnimal} />}
    </div>
  );
}

export default App;
