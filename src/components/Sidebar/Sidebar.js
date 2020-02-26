import React from "react";
import styled, { keyframes } from "styled-components";
import RoomInfo from "./RoomInfo";
import PlayerInfo from "./PlayerInfo";

import { useApi, useRoom, useGraph } from "../../hooks";

const Sidebar = () => {
  const api = useApi();
  const { updateGraph } = useGraph();
  const { updateRoom } = useRoom();

  const examine = async name => {
    try {
      const res = await api.post("examime", { name });
      updateRoom({
        clickedTitle: res.data.name,
        clickedDescription: res.data.description
      });
      updateGraph({
        cooldown: res.data.cooldown,
        isClicked: true
      });
    } catch (err) {
      console.log("There was an error.");
      console.dir(err);
    }
  };

  return (
    <StyledSidebar>
      <RoomInfo examine={examine} />
      <PlayerInfo examine={examine} />
    </StyledSidebar>
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

const StyledSidebar = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #d3e5e5;
  animation: ${fadeIn} 1s ease-in-out;
`;

export default Sidebar;
