import "./App.css";
import { useState } from 'react';
import { List } from "./List";

let count = 0
function App() {
  const [description, setDescription] = useState(0);
  console.log(description)
  const changeDescription = () => {
    setDescription(`Click: ${++count}`)
  }

  return (
    <div className="App">
      <List className="List" title="Languages List" />
      <button onClick={changeDescription}>Click!</button>
      <p>{description}</p>
    </div>
  );
}

export default App;
