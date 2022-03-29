import React from "react";

const Hero = () => {
  return (
    <div className="search-container">
      <header>
        <h1>Valorant Stats</h1>
        <p>Check Detailed Valorant Stats and Leaderboards</p>
      </header>
      <form action="" className="search-form">
        <input
          type="text"
          placeholder="Find an Agent, ie. AXB#6571"
          className="search-input"
        />
      </form>
    </div>
  );
};

export default Hero;
