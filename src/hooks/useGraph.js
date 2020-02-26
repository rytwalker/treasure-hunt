import { useContext } from "react";

import { GraphContext } from "../context";

export const useGraph = () => {
  return useContext(GraphContext);
};
