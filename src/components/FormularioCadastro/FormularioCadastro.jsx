import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
  }
  _handleMudancaTitulo(evento){
   this.titulo= evento.target.value;
   evento.stopPropagation();
   
    }

    _handleMudancaTexto(evento){
      this.texto=evento.target.value;
      evento.stopPropagation();
    }

    _criarNota(evento){
      evento.preventDefault();
      evento.stopPropagation();
      this.props.criarNota(this.titulo, this.texto);
    }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={10}
          placeholder="Write your note here..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Create
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;