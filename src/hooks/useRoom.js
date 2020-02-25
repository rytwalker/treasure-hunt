import { useContext } from "react";

import { RoomContext } from "../context";

export const useRoom = () => {
  return useContext(RoomContext);
};
