import React from "react";
import "../styles/main.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div>
      <nav>
        <button
          className="btn-container"
          onClick={() => {
            <div>
              <MobileNavScreen />
            </div>;
          }}
        >
          <GiHamburgerMenu className="nav-icon" />
        </button>
      </nav>
    </div>
  );
};

const MobileNavScreen = () => {
  console.log("hi");
  return <div>hi</div>;
};

export default Nav;
