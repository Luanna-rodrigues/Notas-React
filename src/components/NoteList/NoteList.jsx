import React, { Component } from "react";
import CardNote from "../CardNote";

export class NoteList extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="note-list_item" key={index}>
              <CardNote titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;