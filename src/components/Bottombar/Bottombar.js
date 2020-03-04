import React from "react";
import styled, { keyframes } from "styled-components";

import { usePlayer, useGraph } from "../../hooks";

import Button from "../Button";
import Buttons from "./Buttons";
import Message from "./Message";

const Bottombar = () => {
  const { isExploring, updatePlayer } = usePlayer();
  const { cooldown, updateGraph } = useGraph();

  const handleClick = () => {
    if (isExploring) {
      updatePlayer({
        isExploring: false
      });
      updateGraph({
        messages: ["Stopped auto exploring."]
      });
    } else {
      // Maybe a helper fn???
      updatePlayer({ isExploring: true }, () =>
        this.wait(1000 * cooldown).then(() => this.exploreMap())
      );
    }
  };

  return (
    <StyledBottombar>
      <Button onclick={handleClick} isExploring={isExploring} />
      <Message />
      <Buttons />
    </StyledBottombar>
  );
};

const fadeIn = keyframes`
   from {
     opacity: 0
   }

   to {
     opacity: 1
   }
 `;

const StyledBottombar = styled.div`
  width: 100%;
  background: #ddd;
  height: 60px;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

export default Bottombar;
