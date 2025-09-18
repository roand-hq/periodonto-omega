import arriba11 from "../assets/tabla1/periodontograma-dientes-arriba-11.png";
import arriba12 from "../assets/tabla1/periodontograma-dientes-arriba-12.png";
import arriba13 from "../assets/tabla1/periodontograma-dientes-arriba-13.png";
import arriba14 from "../assets/tabla1/periodontograma-dientes-arriba-14.png";
import arriba15 from "../assets/tabla1/periodontograma-dientes-arriba-15.png";
import arriba16 from "../assets/tabla1/periodontograma-dientes-arriba-16.png";
import arriba17 from "../assets/tabla1/periodontograma-dientes-arriba-17.png";
import arriba18 from "../assets/tabla1/periodontograma-dientes-arriba-18.png";
import arriba21 from "../assets/tabla2/periodontograma-dientes-arriba-21.png";
import arriba22 from "../assets/tabla2/periodontograma-dientes-arriba-22.png";
import arriba23 from "../assets/tabla2/periodontograma-dientes-arriba-23.png";
import arriba24 from "../assets/tabla2/periodontograma-dientes-arriba-24.png";
import arriba25 from "../assets/tabla2/periodontograma-dientes-arriba-25.png";
import arriba26 from "../assets/tabla2/periodontograma-dientes-arriba-26.png";
import arriba27 from "../assets/tabla2/periodontograma-dientes-arriba-27.png";
import arriba28 from "../assets/tabla2/periodontograma-dientes-arriba-28.png";

import { Line } from "react-chartjs-2";
import { useRef, useEffect } from "react";

// Registrar Chart.js correctamente
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const imagenesArriba = [
  arriba18, arriba17, arriba16, arriba15, arriba14, arriba13, arriba12, arriba11,
  arriba21, arriba22, arriba23, arriba24, arriba25, arriba26, arriba27, arriba28
];

// Componente individual para cada diente
function DienteConGrafica({ imagen, numeroDiente, margenData, profundidadData, altoDiente = 150, index, cara }) {
  const chartRef = useRef(null);
  
  useEffect(() => {
    return () => {
      // Cleanup al desmontar - más robusto
      if (chartRef.current && chartRef.current.chartInstance) {
        try {
          chartRef.current.chartInstance.destroy();
        } catch (error) {
          console.log('Chart cleanup error:', error.message);
        }
      }
      if (chartRef.current) {
        chartRef.current = null;
      }
    };
  }, []);

  // Validar datos antes de crear el chart
  const hasValidData = margenData.some(v => v !== null) || profundidadData.some(v => v !== null);
  
  if (!hasValidData) {
    // Renderizar solo la imagen si no hay datos válidos
    return (
      <div className="relative flex-1 min-w-0" style={{ height: `${altoDiente}px` }}>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={imagen}
            alt={`Diente ${numeroDiente}`}
            className="max-w-full object-contain"
            style={{ 
              height: '90%',
              opacity: 0.7,
              filter: 'brightness(1.1) contrast(0.9)'
            }}
          />
        </div>
      </div>
    );
  }

  const data = {
    labels: ['1', '2', '3'],
    datasets: [
      {
        label: "Margen Gingival",
        data: margenData,
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.3)",
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 3,
        fill: origin,
        spanGaps: true, // Conectar puntos saltando valores null
      },
      {
        label: "Profundidad Sondaje",
        data: profundidadData,
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.3)",
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 3,
        fill: origin,
        spanGaps: true, // Conectar puntos saltando valores null
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0 // Sin animaciones
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        reverse: false,
        min: -15,
        max: 5,
        display: false,
      },
      x: { 
        display: false,
        grid: { display: false }
      },
    },
    plugins: { 
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          title: function(tooltipItems) {
            return `Diente ${numeroDiente} - Cara ${tooltipItems[0].label}`;
          }
        }
      }
    },
    backgroundColor: 'transparent',
    elements: {
      point: {
        backgroundColor: 'white',
        borderWidth: 2
      }
    },
    layout: {
      padding: {
        top: 10,    // Padding superior para evitar cortes
        bottom: 5,
        left: 5,
        right: 5
      }
    },
    // Configuración adicional para evitar errores
    onHover: () => {}, // Función vacía para evitar errores
    onClick: () => {}, // Función vacía para evitar errores
  };

  return (
    <div className="relative flex-1 min-w-0" style={{ height: `${altoDiente}px` }}>
      {/* Imagen de fondo del diente */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={imagen}
          alt={`Diente ${numeroDiente}`}
          className="max-w-full object-contain"
          style={{ 
            height: '90%',
            opacity: 0.7,
            filter: 'brightness(1.1) contrast(0.9)'
          }}
        />
      </div>
      
      {/* Mini gráfica superpuesta - posicionada desde la línea gingival */}
      <div className="absolute z-20 p-1" style={{ 
        top: '40%',     // Subido más arriba para que no se corte
        left: 0,
        right: 0,
        height: '90%'   // Aumentado para dar más espacio vertical
      }}>
        <Line 
          ref={chartRef}
          data={data} 
          options={options}
        />
      </div>
    </div>
  );
}

export default function Grafica({ cara, lado, dientes }) {
  const listaDientes =
    lado === "arriba"
      ? ["1.8","1.7","1.6","1.5","1.4","1.3","1.2","1.1","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8"]
      : ["4.8","4.7","4.6","4.5","4.4","4.3","4.2","4.1","3.1","3.2","3.3","3.4","3.5","3.6","3.7","3.8"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Leyenda */}
      <div className="flex justify-center gap-6 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-500"></div>
          <span>Margen Gingival</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-red-500"></div>
          <span>Profundidad Sondaje</span>
        </div>
      </div>

      {/* Grid de dientes con sus gráficas */}
      <div className="flex gap-1">
        {listaDientes.map((numeroDiente, index) => {
          const caraData = dientes[numeroDiente]?.caras?.[cara] || {};
          const margenGingival = caraData.margenGingival || ["", "", ""];
          const profundidadSondaje = caraData.profundidadSondaje || ["", "", ""];

          // Convertir datos a números o null
          const margenData = margenGingival.map((v) => 
            (v === "" || v === "-") ? null : Number(v)
          );
          const profundidadData = profundidadSondaje.map((v) => 
            (v === "" || v === "-") ? null : Number(v)
          );

          return (
            <DienteConGrafica
              key={`${numeroDiente}-${cara}-${index}`}
              index={index}
              cara={cara}
              imagen={imagenesArriba[index]}
              numeroDiente={numeroDiente}
              margenData={margenData}
              profundidadData={profundidadData}
              altoDiente={200} // Canvas más grande
            />
          );
        })}
      </div>

      {/* Escala Y como referencia */}
      <div className="flex justify-center items-center mt-4 text-xs text-gray-500">
        <div className="flex flex-col items-center">
          <span>Escala Y:</span>
          <div className="flex gap-2 mt-1">
            {[-5, 0, 5].map(val => (
              <span key={val} className="px-1 py-0.5 bg-gray-100 rounded">{val}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}