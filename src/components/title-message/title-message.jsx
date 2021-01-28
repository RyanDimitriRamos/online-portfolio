import React from "react";
import Typewriter from "typewriter-effect";
import Styled from "styled-components";

const AppTitleMessage = Styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <AppTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi! I'm 
          <br/>
          <span>
            <strong>Dimitri Ramos:</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Developer", "Learner", "Singer"],
              autoStart: true,
              loop: true,
              delay: 75
            }}
          />
        </div>
      </div>
    </div>
  </AppTitleMessage>
);

export default TitleMessage;