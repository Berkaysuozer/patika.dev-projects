import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",

      flipping: false,
      yazı: 0,
      tura: 0,
      toplam: 0
    };
  }
  handleClick = () => {
    this.setState({ flipping: true });
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({ toplam: this.state.toplam + 1 });

    let yazıtura = Math.round(Math.random());
    yazıtura === 0 ? this.setState({ side: 'yazi', yazı: this.state.yazı + 1 }) : this.setState({ side: 'tura', tura: this.state.tura + 1 });



  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={
          this.state.side
        } flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.toplam} </strong>
          atıştan
          <strong> {this.state.tura} </strong>ü tura
          <strong> {this.state.yazı} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
