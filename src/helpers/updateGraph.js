/*
  This handles updating the graph at any point when it changes including color things.
  */
export const updateGraph = (
  id,
  coords,
  exits,
  previous_room_id = null,
  move = null
) => {
  const { inverse } = this.state;

  let graph = Object.assign({}, this.state.graph);
  // Make node if none
  if (!this.state.graph[id]) {
    let payload = [];
    payload.push(coords);
    const moves = {};
    exits.forEach(exit => {
      moves[exit] = "?";
    });
    payload.push(moves);
    graph = { ...graph, [id]: payload };
  }

  if (
    previous_room_id !== null &&
    move &&
    previous_room_id !== id &&
    graph[previous_room_id][1][move] === "?"
  ) {
    graph[previous_room_id][1][move] = id;
    graph[id][1][inverse[move]] = previous_room_id;
  }
  if (previous_room_id !== null) {
    graph[previous_room_id][0].color = "#525959";
    graph[id][0].color = "#7dcdbe";
  } else {
    graph[0][0].color = "#525959";
    graph[id][0].color = "#7dcdbe";
  }

  localStorage.setItem("graph", JSON.stringify(graph));
  return graph;
};
