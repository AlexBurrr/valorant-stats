import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [bestNA, setBestNA] = useState([]);
  const [bestEU, setBestEU] = useState([]);
  const [bestAP, setBestAP] = useState([]);
  const [bestKR, setBestKR] = useState([]);
  useEffect(() => {
    const regions = ["na", "eu", "ap", "kr"];

    for (let i = 0; i < regions.length; i++) {
      axios
        .get(`https://api.henrikdev.xyz/valorant/v1/leaderboard/${regions[i]}`)
        .then((res) => {
          setBestNA([res.data[0]]);
          setBestEU([res.data[1]]);
          setBestAP([res.data[2]]);
          setBestKR([res.data[3]]);
        });
    }
  }, []);

  // console.log(best);

  return (
    <div className="hero-container">
      <section className="header-wrapper">
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
      </section>
      <section className="top-player-wrapper"></section>
    </div>
  );
};

export default Hero;
