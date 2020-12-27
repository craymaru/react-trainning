import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import { List } from "./List";

let count = 0
function App() {
  const [description, setDescription] = useState('Before click');
  
  const changeDescription = () => {
    setDescription(`Click: ${++count}`)
  }

  return (
    <div className="App">
      <List className="List" title="Languages List" />
      <button onClick={changeDescription}>Click!</button>
      <p>{description}</p>
      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      
    </header> */}
    </div>
  );
}

export default App;
