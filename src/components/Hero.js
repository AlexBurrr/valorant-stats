import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const bestUrl = `https://api.henrikdev.xyz/valorant/v1/leaderboard/na`;
  const [topThree, setTopThree] = useState();

  useEffect(() => {
    axios(bestUrl).then((res) => {
      setTopThree(res.data.slice(0, 3));
    });
  }, []);

  console.log(topThree);

  return (
    <div className="hero-container">
      {topThree ? (
        <>
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

          <section className="top-player-container">
            <div className="top-player-wrapper">
              {topThree.map((player, index) => (
                <article className="top-player-card" key={index}>
                  {player.gameName}
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
      {/* <section className="header-wrapper">
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
      </section> */}
      {/* <section className="top-player-container">
        <div className="top-player-wrapper">
          {topThree.map((player, index) => (
            <article className="top-player-card" key={index}>
              {player.gameName}
            </article>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
