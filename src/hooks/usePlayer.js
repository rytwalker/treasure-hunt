import { useContext } from "react";

import { PlayerContext } from "../context";

export const usePlayer = () => {
  return useContext(PlayerContext);
};
