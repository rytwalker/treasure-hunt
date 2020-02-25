import React, { createContext, useReducer } from "react";
import PlayerReducer from "../reducers/PlayerReducer";

const initialState = {
  player: {
    coords: { x: 50, y: 60 },
    encumbrance: null,
    isExploring: false,
    gold: null,
    inventory: [],
    speed: null,
    strength: null
  }
};

export const PlayerContext = createContext(initialState);

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  return (
    <PlayerContext.Provider
      value={{
        player: state.player
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
