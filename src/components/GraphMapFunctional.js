import React, { useContext, useEffect } from "react";

import Bottombar from "./Bottombar";

import PirateContext, { GraphContext, RoomContext } from "../context";
import { useRoom } from "../hooks";
import data from "../data/data.json";

function graphUpdater({}) {}

const GraphMapFunctional = () => {
  const { graph, loadGraph, updateGraph } = useContext(GraphContext);
  // const { room, updateRoom } = useContext(RoomContext);
  const { room, updateRoom } = useRoom();

  // async function init() {
  //   const { cooldown } = graph;
  //   await this.getLocation(updateRoom);
  //   await this.wait(1000 * cooldown);
  //   await this.getStatus();
  // }

  // useEffect(() => {
  //   if (!localStorage.hasOwnProperty("graph")) {
  //     localStorage.setItem("graph", JSON.stringify(data));
  //   }
  //   const graph = JSON.parse(localStorage.getItem("graph"));
  //   loadGraph(graph);

  //   // this.init();
  // }, []);

  return <PirateContext>{room.title}</PirateContext>;
};

export default GraphMapFunctional;
