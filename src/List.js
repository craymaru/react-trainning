import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container"

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE
  }
`

export const List = ({ animals }) => {
  return (
    <TabBodyContainer title="Animals">
      <div>
        {animals.map((animal, index) => {
          return <ListItem key={index}>{animal}</ListItem>;
        })}
      </div>
    </TabBodyContainer>
  );
};
