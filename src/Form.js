import { useState } from "react";

export const Form = ({ onAddAnimal }) => {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onAddAnimal(text)
  };

  return (
    <div>
      <h4>Add New Animal</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};
