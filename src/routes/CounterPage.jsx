import React from "react";
import { Navbar, Counter } from "../components";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <p>
        Well it's not really the homepage since root is the default directory
        but since I have nothing else to put here click the counter below
      </p>
      <Counter />
    </div>
  );
};

export default Home;
