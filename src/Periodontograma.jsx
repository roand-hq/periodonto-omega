import './App.css'
import { useDientes } from './hooks/useDientes';
import TablaDientes from './Components/tabla';
import { useState, useEffect } from 'react';
const Periodontograma = ({savedState, onSave}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize(); // Revisar al montar
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 p-6 text-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">Pantalla demasiado pequeña</h2>
          <p className="text-gray-600">
            El periodontograma no puede visualizarse correctamente en dispositivos pequeños.
            Intenta usar una tablet o computadora.
          </p>
        </div>
      </div>
    );
  }
  return (
   <>
   <TablaDientes savedState={savedState} onSave={onSave}></TablaDientes>
   </>
  );
};

export default Periodontograma;
