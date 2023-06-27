// pages/HoroscopoPage

import { useState, useEffect } from 'react';
import SignoSelector from '../components/SignoSelector';
import HoroscopoCard from '../components/HoroscopoCard';
import obtenerHoroscopo from '../api/horoscopo';

const HoroscopoPage = () => {
  const [signo, setSigno] = useState('');
  const [horoscopo, setHoroscopo] = useState(null);

  useEffect(() => {
    const obtenerDatosHoroscopo = async () => {
      try {
        const horoscopoData = await obtenerHoroscopo(signo);
        setHoroscopo(horoscopoData);
      } catch (error) {
        console.error(error);
        // Manejar el error de obtener el horóscopo
      }
    };

    obtenerDatosHoroscopo();
  }, [signo]);

  const handleSignoChange = (signoSeleccionado) => {
    setSigno(signoSeleccionado);
  };

  return (
    <div className="horoscopo-page">
      <h1>Horóscopos Diarios</h1>
      <SignoSelector onChange={handleSignoChange} />
      {horoscopo ? (
        <HoroscopoCard horoscopo={horoscopo} />
      ) : (
        <p>Selecciona un signo para ver el horóscopo</p>
      )}
    </div>
  );
};

export default HoroscopoPage;