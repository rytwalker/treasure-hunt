import React, { createContext, useReducer } from "react";
import RoomReducer from "../reducers/RoomReducer";

const initialState = {
  room: {
    clickedDescription: "",
    clickedTitle: "",
    description: "",
    exits: [],
    items: [],
    name: "",
    players: [],
    room_id: null,
    title: "test"
  }
};

export const RoomContext = createContext(initialState);

export const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RoomReducer, initialState);

  function updateRoom(room) {
    dispatch({
      type: "UPDATE_ROOM",
      payload: room
    });
  }

  return (
    <RoomContext.Provider
      value={{
        room: state.room,
        updateRoom
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
