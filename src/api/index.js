import { useApi } from "../hooks/useApi";
import { parseCoords } from "../helpers";

export const getLocation = async (updateGraph, updateRoom) => {
  try {
    const res = await useApi("get", "init");
    console.log(res.data);
    // UPDATE GRAPH
    let graph = updateGraph(
      res.data.room_id,
      parseCoords(res.data.coordinates),
      res.data.exits,
      (cooldown: res.data.cooldown)
    );
    // UPDATE ROOM LOCATION
    updateRoom({
      room_id: res.data.room_id,
      coords: parseCoords(res.data.coordinates),
      exits: [...res.data.exits],
      description: res.data.description,
      title: res.data.title,
      players: [...res.data.players],
      items: [...res.data.items]
    });

    this.updateVisited();
  } catch (err) {
    console.log("There was an error.");
    console.dir(err);
    this.setState({ cooldown: err.response.data.cooldown });
  }
};
