import React, { Component } from "react";
import "./CardNote.css";

class CardNote extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="card-note_cabecalho">
          <h3 className="card-note_title">{this.props.titulo}</h3>
        </header>
        <p className="card-note_text">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNote;