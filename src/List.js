export const List = ({ animals }) => {
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
