import React, { createContext, useReducer } from "react";
import GraphReducer from "../reducers/GraphReducer";

const initialState = {
  graph: {
    allCoords: [],
    allLinks: [],
    cooldown: 2,
    error: "",
    isClicked: false,
    generating: false,
    graph: {},
    graphLoaded: false,
    inverse: { n: "s", s: "n", w: "e", e: "w" },
    loaded: false,
    messages: [],
    progress: 0,
    visited: new Set()
  }
};

export const GraphContext = createContext(initialState);

export const GraphProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GraphReducer, initialState);

  function loadGraph(graph) {
    dispatch({
      type: "LOAD_GRAPH",
      payload: graph
    });
  }

  return (
    <GraphContext.Provider
      value={{
        graph: state.graph,
        loadGraph
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};
