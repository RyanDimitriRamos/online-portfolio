import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

const AppScroll = styled.div`
  position: relative;
  z-index: 0;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  color: #FFFFFF;
  animation: MoveUpDown 1.5s linear infinite;
  .turn {
    cursor: pointer;
    color:white;
    transform: rotate(90deg);
  }
  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 100;
    }
    50% {
      bottom:  37px;
    }
  }
`;
const handleScrollDown = () =>{}

const ScrollDown = () => {
  return (
    <AppScroll>
      <div  onClick={handleScrollDown}>
        <Nav.Link href="#about" className="turn"> &gt; </Nav.Link>
      </div>
    </AppScroll>
  );
};

export default ScrollDown;