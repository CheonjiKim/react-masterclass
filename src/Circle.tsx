import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

function Circle(props: CircleProps) {
  return <Container bgColor={props.bgColor}></Container>;
}

export default Circle;
