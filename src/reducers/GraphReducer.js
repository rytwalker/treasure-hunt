export default (state, action) => {
  switch (action.type) {
    case "LOAD_GRAPH":
      return {
        ...state,
        graph: { ...state.graph, graph: action.payload, graphLoaded: true }
      };
    default:
      return state;
  }
};
