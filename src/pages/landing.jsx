import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  return (
    <main>
      <nav>
        <img src={logo} alt="valyou Logo" title="Valyou" />
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </nav>
      <section>
        <div className="green">
          The World's First Blockchain Powered
        </div>
        <div className="hero">
          <h1>
            Music Artist <span className="pink-linear">Financial Stock</span> 
            Market
          </h1>
          <p>
            Linked to a new global music industry & economy powered by
            decentralised finance. Purchase NFT digital asset stocks in any
            Upcoming, Independent & Major Artist brand & receive a portion of
            their revenue as dividends for holding their stock.
          </p>
        </div>
      </section>
    </main>
  );
}
