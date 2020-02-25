import React from "react";
import { GraphProvider, GraphContext } from "./GraphContext";
import { RoomProvider, RoomContext } from "./RoomContext";
import { PlayerProvider, PlayerContext } from "./PlayerContext";

export { GraphContext, RoomContext, PlayerContext };

export default function PirateContext({ children }) {
  return (
    <GraphProvider>
      <RoomProvider>
        <PlayerProvider>{children}</PlayerProvider>
      </RoomProvider>
    </GraphProvider>
  );
}
