//components/HoroscopoCard

import PropTypes from 'prop-types';

const HoroscopoCard = ({ horoscopo }) => {
  const { signo, horoscopo: mensajeHoroscopo, numSuerte, compatibleCon, colorDia } = horoscopo;

  return (
    <div>
      <h2>{signo.signo}</h2>
      <p>{mensajeHoroscopo}</p>
      <p>Números de la suerte: {numSuerte.join(', ')}</p>
      <p>Compatible con: {compatibleCon.join(', ')}</p>
      <p>Color del día: {colorDia[0]}</p>
    </div>
  );
};

HoroscopoCard.propTypes = {
  horoscopo: PropTypes.shape({
    signo: PropTypes.shape({
      signo: PropTypes.string.isRequired,
      caracteristica: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      elemento: PropTypes.string.isRequired,
      fecha_inicia: PropTypes.string.isRequired,
      fecha_termina: PropTypes.string.isRequired,
      ruta_img: PropTypes.string.isRequired,
    }).isRequired,
    horoscopo: PropTypes.string.isRequired,
    numSuerte: PropTypes.arrayOf(PropTypes.number).isRequired,
    compatibleCon: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorDia: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default HoroscopoCard;