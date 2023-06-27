// src/api/horoscopo.js

 import axios from 'axios';

  export default async function obtenerHoroscopo(signo) {
    try {
      const response = await axios.get(`http://localhost:3000/api/horoscopo/${signo}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener el horóscopo');
    }
}  
