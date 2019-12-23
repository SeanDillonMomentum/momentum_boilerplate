import React, { useRef } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100vh;
  /* background-color: ${props => props.backgroundColor}; */
  background: linear-gradient(${props => props.gradient});
`;

const App = () => {
  const currRefTop = useRef(null);
  const currRefMiddle = useRef(null);
  const currRefBottom = useRef(null);
  const scrollTo = curr => {
    let currRef;
    switch (curr) {
      case "middle": {
        currRef = currRefMiddle;
        break;
      }
      case "bottom": {
        currRef = currRefBottom;
        break;
      }
      default: {
        currRef = null;
        break;
      }
    }
    currRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <StyledHome
        ref={currRefTop}
        onClick={() => scrollTo("middle")}
        gradient={"to bottom, blue, red"}
      ></StyledHome>
      <StyledHome
        onClick={() => scrollTo("bottom")}
        ref={currRefMiddle}
        gradient={"to bottom, red, yellow"}
      ></StyledHome>
      <StyledHome
        onClick={() => scrollTo("middle")}
        ref={currRefBottom}
        gradient={"to bottom, yellow, green"}
      ></StyledHome>
    </div>
  );
};

export default hot(module)(App);
