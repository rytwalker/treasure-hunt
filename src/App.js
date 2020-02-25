import React from "react";
import { Route } from "react-router-dom";
// import About from "./components/About";
// import GraphMap from "./components/GraphMap";
import Header from "./components/Header";
import GraphMapFunctional from "./components/GraphMapFunctional";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Route exact path="/" component={GraphMap} />
      <Route path="/about" component={About} /> */}
      <Route path="/test" component={GraphMapFunctional} />
    </div>
  );
}

export default App;
