import { useEffect } from "react";

export const List = ({ animals }) => {

  useEffect(() => {
    console.log("List: useEffect")
    return () => {
      console.log("List:useEffect:unmount")
    }
  })

  return (
    <div>
      <h4>Animals</h4>
      <ul>
        {animals.map((animal, index) => {
          return <li key={index}>{animal}</li>;
        })}
      </ul>
    </div>
  );
};
