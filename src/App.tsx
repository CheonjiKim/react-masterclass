import React from "react";
import { ReactDOM } from "react";
import { styled } from "styled-components";
import Circle from "./Circle";

const Wrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: tomato;
`;

function App() {
  return (
    <div>
      <Circle bgColor="teal"></Circle>
      <Circle bgColor="tomato"></Circle>
      <Circle bgColor="teal"></Circle>
    </div>
  );
}

export default App;
