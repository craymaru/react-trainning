import styled from "styled-components";
import { useState } from "react";
import { Button } from "./components/button"
import { TabBodyContainer } from "./components/tab-body-container"


const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border 1px solid black;
`
const ButtonContainer = styled.div`
  margin-top: 24px;
`

const FormButton = styled(Button)`
  width: 120px;
`

export const Form = ({ onAddAnimal }) => {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onAddAnimal(text)
  };

  return (
    <TabBodyContainer title="Add new animal">
      <form onSubmit={submitForm}>
        <div>
        <Label>Animal</Label>
          <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <ButtonContainer>
          <FormButton>Add</FormButton>
        </ButtonContainer>
      </form>
    </TabBodyContainer>
  );
};
