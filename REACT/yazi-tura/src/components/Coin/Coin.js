import React from "react";
import "./Coin.css";
import CoinTura from "../../Assets/1-lira-tura.png";
import CoinYazi from "../../Assets/1-lira-yazi.png";

const Coin = (props) => {

  return (

    <div className="Coin-container">
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img
          src={props.side === "tura" ? CoinTura : CoinYazi}
          alt='para'

        />

      </div>
    </div>
  );
};

export default Coin;
