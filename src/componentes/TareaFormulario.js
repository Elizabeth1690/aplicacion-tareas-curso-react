import "../hojas-de-estilo/TareaFormulario.css";
import { useState } from "react";

function TareaFormulario() {
  const manejarCambio = (e) => {
    console.log("Escribiendo...");
  };
  const manejarEnvio = (e) => {
    const tareaNueva = {
      id: "34545",
      texto: "hola",
    };
  };
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
