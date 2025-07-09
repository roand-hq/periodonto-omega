// hooks/useDientes.js
import { useState } from 'react';

// Lista de dientes permanentes
const numerosDientes = [
  '1.8','1.7','1.6','1.5','1.4','1.3','1.2','1.1',
  '2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8',
  '3.8','3.7','3.6','3.5','3.4','3.3','3.2','3.1',
  '4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8'
];

// Crea una cara (vestibular o lingual/palatina)
const crearCara = (tipo) => ({
  furca: tipo === 'palatina'  ? ['', ''] : [''],
  sangrado: [false,false,false],
  placa: [false,false,false],
  anchuraEncia: '',
  margenGingival: [0,0,0],
  profundidadSondaje: [0,0,0]
});

// Crea un diente completo con sus dos caras
const crearDiente = (numero) => {
  const cuadrante = numero[0]; // '1', '2', '3' o '4'
  const esSuperior = cuadrante === '1' || cuadrante === '2';
  const caraInterna = esSuperior ? 'palatina' : 'lingual';

  return {
    implante: false,
    movilidad: 0, // solo valores entre -3 y +3
    pronostico: '',
    caras: {
      vestibular: crearCara('vestibular'),
      [caraInterna]: crearCara(caraInterna)
    }
  };
};

// Hook principal
export function useDientes() {
  const dientesIniciales = () =>
    Object.fromEntries(numerosDientes.map(n => [n, crearDiente(n)]));

  const [dientes, setDientes] = useState(dientesIniciales());

  // Actualiza cualquier campo de un diente completo
  const actualizarDiente = (numero, nuevosDatos) => {
    setDientes(prev => ({
      ...prev,
      [numero]: {
        ...prev[numero],
        ...nuevosDatos
      }
    }));
  };

  // Actualiza una cara específica del diente
  const actualizarCara = (numero, cara, nuevosCampos) => {
    setDientes(prev => ({
      ...prev,
      [numero]: {
        ...prev[numero],
        caras: {
          ...prev[numero].caras,
          [cara]: {
            ...prev[numero].caras[cara],
            ...nuevosCampos
          }
        }
      }
    }));
  };

  // Reinicia todo el estado
  const resetearDientes = () => {
    setDientes(dientesIniciales());
  };

  return {
    dientes,
    actualizarDiente,
    actualizarCara,
    resetearDientes
  };
}
