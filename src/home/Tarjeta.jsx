import React from "react";
import "./Tarjeta.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Tarjeta = () => {
	const urlImagen = "https://picsum.photos";
  return (
    <div className="Tarjeta">
      <div className="ImagenTarjeta">
        <img src={`${urlImagen}/500/300`} alt="ImagenHaiku" />
      </div>
      <div className="CuerpoTarjeta">
        <div className="InfoTarjeta">
          <img src={`${urlImagen}/32/32`} alt="" />
          <h4>Titulo del Haiku</h4>
        </div>
        <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
      </div>
    </div>
  );
};
export default Tarjeta;