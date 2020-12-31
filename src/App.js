import styled from "styled-components";
import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getAnimals } from "./const/animals";
import { withLoading } from "./hoc/with-loading";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${(props) => (props.focused ? "2px solid #F44336" : "none")};
`;

function App({data}) {
  const [tab, setTab] = useState("list");
  const [animals, setAnimals] = useState(data);

  const addAnimal = (animal) => {
    setAnimals([...animals, animal]);
    setTab("list");
  };

  return (
    <div className="App">
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab("list")}>List</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab("form")}>Form</HeaderLi>
        </HeaderUl>
      </Header>
      <hr />
      {tab === "list" ? <List className="List" animals={animals} /> : <Form className="Form" onAddAnimal={addAnimal} />}
    </div>
  );
}

export default withLoading(App, getAnimals);
