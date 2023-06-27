// src/components/SignoSelector.js

import { useState } from "react";
import PropTypes from "prop-types";

const SignoSelector = ({ onChange }) => {
  const [signo, setSigno] = useState("");

  const handleSelectChange = (e) => {
    const selectedSigno = e.target.value;
    setSigno(selectedSigno);
    //onChange(selectedSigno);
    // Verificar si se ha seleccionado una opción válida antes de llamar a onChange
    if (selectedSigno !== "" && selectedSigno !== "-- Selecciona --") {
      onChange(selectedSigno);
    }
  };

  return (
    <div className="signo-selector">
      <label htmlFor="signo">Selecciona tu signo:</label>
      <select id="signo" value={signo} onChange={handleSelectChange}>
        <option value="">-- Selecciona --</option>
        <option value="aries">aries</option>
        <option value="tauro">tauro</option>
        <option value="geminis">geminis</option>
        <option value="cancer">cancer</option>
        <option value="leo">leo</option>
        <option value="virgo">virgo</option>
        <option value="libra">libra</option>
        <option value="escorpio">escorpio</option>
        <option value="sagitario">sagitario</option>
        <option value="capricornio">capricornio</option>
        <option value="acuario">acuario</option>
        <option value="piscis">piscis</option>        
      </select>
    </div>
  );
};

SignoSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SignoSelector;
