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

import arriba11b from "../assets/tabla3/periodontograma-dientes-arriba-11b.png";
import arriba12b from "../assets/tabla3/periodontograma-dientes-arriba-12b.png";
import arriba13b from "../assets/tabla3/periodontograma-dientes-arriba-13b.png";
import arriba14b from "../assets/tabla3/periodontograma-dientes-arriba-14b.png";
import arriba15b from "../assets/tabla3/periodontograma-dientes-arriba-15b.png";
import arriba16b from "../assets/tabla3/periodontograma-dientes-arriba-16b.png";
import arriba17b from "../assets/tabla3/periodontograma-dientes-arriba-17b.png";
import arriba18b from "../assets/tabla3/periodontograma-dientes-arriba-18b.png";
import arriba21b from "../assets/tabla4/periodontograma-dientes-arriba-21b.png";
import arriba22b from "../assets/tabla4/periodontograma-dientes-arriba-22b.png";
import arriba23b from "../assets/tabla4/periodontograma-dientes-arriba-23b.png";
import arriba24b from "../assets/tabla4/periodontograma-dientes-arriba-24b.png";
import arriba25b from "../assets/tabla4/periodontograma-dientes-arriba-25b.png";
import arriba26b from "../assets/tabla4/periodontograma-dientes-arriba-26b.png";
import arriba27b from "../assets/tabla4/periodontograma-dientes-arriba-27b.png";
import arriba28b from "../assets/tabla4/periodontograma-dientes-arriba-28b.png";

import abajo41 from "../assets/tabla5/periodontograma-dientes-abajo-41.png";
import abajo42 from "../assets/tabla5/periodontograma-dientes-abajo-42.png";
import abajo43 from "../assets/tabla5/periodontograma-dientes-abajo-43.png";
import abajo44 from "../assets/tabla5/periodontograma-dientes-abajo-44.png";
import abajo45 from "../assets/tabla5/periodontograma-dientes-abajo-45.png";
import abajo46 from "../assets/tabla5/periodontograma-dientes-abajo-46.png";
import abajo47 from "../assets/tabla5/periodontograma-dientes-abajo-47.png";
import abajo48 from "../assets/tabla5/periodontograma-dientes-abajo-48.png";
import abajo31 from "../assets/tabla6/periodontograma-dientes-abajo-31.png";
import abajo32 from "../assets/tabla6/periodontograma-dientes-abajo-32.png";
import abajo33 from "../assets/tabla6/periodontograma-dientes-abajo-33.png";
import abajo34 from "../assets/tabla6/periodontograma-dientes-abajo-34.png";
import abajo35 from "../assets/tabla6/periodontograma-dientes-abajo-35.png";
import abajo36 from "../assets/tabla6/periodontograma-dientes-abajo-36.png";
import abajo37 from "../assets/tabla6/periodontograma-dientes-abajo-37.png";
import abajo38 from "../assets/tabla6/periodontograma-dientes-abajo-38.png";

import abajo41b from "../assets/tabla7/periodontograma-dientes-abajo-41b.png";
import abajo42b from "../assets/tabla7/periodontograma-dientes-abajo-42b.png";
import abajo43b from "../assets/tabla7/periodontograma-dientes-abajo-43b.png";
import abajo44b from "../assets/tabla7/periodontograma-dientes-abajo-44b.png";
import abajo45b from "../assets/tabla7/periodontograma-dientes-abajo-45b.png";
import abajo46b from "../assets/tabla7/periodontograma-dientes-abajo-46b.png";
import abajo47b from "../assets/tabla7/periodontograma-dientes-abajo-47b.png";
import abajo48b from "../assets/tabla7/periodontograma-dientes-abajo-48b.png";
import abajo31b from "../assets/tabla8/periodontograma-dientes-abajo-31b.png";
import abajo32b from "../assets/tabla8/periodontograma-dientes-abajo-32b.png";
import abajo33b from "../assets/tabla8/periodontograma-dientes-abajo-33b.png";
import abajo34b from "../assets/tabla8/periodontograma-dientes-abajo-34b.png";
import abajo35b from "../assets/tabla8/periodontograma-dientes-abajo-35b.png";
import abajo36b from "../assets/tabla8/periodontograma-dientes-abajo-36b.png";
import abajo37b from "../assets/tabla8/periodontograma-dientes-abajo-37b.png";
import abajo38b from "../assets/tabla8/periodontograma-dientes-abajo-38b.png";

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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const imagenesArribaVestibular = [
  arriba18,
  arriba17,
  arriba16,
  arriba15,
  arriba14,
  arriba13,
  arriba12,
  arriba11,
  arriba21,
  arriba22,
  arriba23,
  arriba24,
  arriba25,
  arriba26,
  arriba27,
  arriba28,
];

const imagenesArribaPalatina = [
  arriba18b,
  arriba17b,
  arriba16b,
  arriba15b,
  arriba14b,
  arriba13b,
  arriba12b,
  arriba11b,
  arriba21b,
  arriba22b,
  arriba23b,
  arriba24b,
  arriba25b,
  arriba26b,
  arriba27b,
  arriba28b,
];

const imagenesAbajoVestibular = [
  abajo48,
  abajo47,
  abajo46,
  abajo45,
  abajo44,
  abajo43,
  abajo42,
  abajo41,
  abajo31,
  abajo32,
  abajo33,
  abajo34,
  abajo35,
  abajo36,
  abajo37,
  abajo38,
];
const imagenesAbajoPalatina = [
  abajo48b,
  abajo47b,
  abajo46b,
  abajo45b,
  abajo44b,
  abajo43b,
  abajo42b,
  abajo41b,
  abajo31b,
  abajo32b,
  abajo33b,
  abajo34b,
  abajo35b,
  abajo36b,
  abajo37b,
  abajo38b,
];
// Componente individual para cada diente
function DienteConGrafica({
  imagen,
  numeroDiente,
  margenData,
  profundidadData,
  altoDiente = 150,
  index,
  cara,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup al desmontar - más robusto
      if (chartRef.current && chartRef.current.chartInstance) {
        try {
          chartRef.current.chartInstance.destroy();
        } catch (error) {
          console.log("Chart cleanup error:", error.message);
        }
      }
      if (chartRef.current) {
        chartRef.current = null;
      }
    };
  }, []);

  // Validar datos antes de crear el chart
  const hasValidData =
    margenData.some((v) => v !== null) ||
    profundidadData.some((v) => v !== null);

  if (!hasValidData) {
    // Renderizar solo la imagen si no hay datos válidos
    return (
      <div
        className="relative flex-1 min-w-0"
        style={{ height: `${altoDiente}px` }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={imagen}
            alt={`Diente ${numeroDiente}`}
            className="max-w-full object-contain"
            style={{
              height: "90%",
              opacity: 0.7,
              filter: "brightness(1.1) contrast(0.9)",
            }}
          />
        </div>
      </div>
    );
  }

  const data = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        label: "Margen Gingival",
        data: margenData,
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.3)",
        tension: 0.3,
        pointRadius: 0,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 3,
        fill: true,
        spanGaps: true, // Conectar puntos saltando valores null
      },
      {
        label: "Profundidad Sondaje",
        data: profundidadData,
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.3)",
        tension: 0.3,
        pointRadius: 0,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 3,
        fill: true,
        spanGaps: true, // Conectar puntos saltando valores null
      },
    ],
  };
  const isPalatina = cara != "vestibular";
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0, // Sin animaciones
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        reverse: isPalatina,
        min: -15,
        max: 5,
        display: false,
      },
      x: {
        display: false,
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (tooltipItems) {
            return `Diente ${numeroDiente} - Cara ${tooltipItems[0].label}`;
          },
        },
      },
    },
    backgroundColor: "transparent",
    elements: {
      point: {
        backgroundColor: "white",
        borderWidth: 2,
      },
    },
    layout: {
      padding: {
        top: 10, // Padding superior para evitar cortes
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    // Configuración adicional para evitar errores
    onHover: () => {}, // Función vacía para evitar errores
    onClick: () => {}, // Función vacía para evitar errores
  };

  return (
    <div
      className="relative flex-1 min-w-0"
      style={{ height: `${altoDiente}px` }}
    >
      {/* Imagen de fondo del diente */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={imagen}
          alt={`Diente ${numeroDiente}`}
          className="max-w-full object-contain"
          style={{
            height: "90%",
            opacity: 0.7,
            filter: "brightness(1.1) contrast(0.9)",
          }}
        />
      </div>

      {/* Mini gráfica superpuesta - posicionada desde la línea gingival */}
      <div
        className="absolute z-20 p-1"
        style={{
          top: isPalatina ? "-30%" : "40%", // Subido más arriba para que no se corte
          left: 0,
          right: 0,
          height: "90%", // Aumentado para dar más espacio vertical
        }}
      >
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

export default function Grafica({ cara, lado, dientes }) {
  const listaDientes =
    lado === "arriba"
      ? [
          "1.8",
          "1.7",
          "1.6",
          "1.5",
          "1.4",
          "1.3",
          "1.2",
          "1.1",
          "2.1",
          "2.2",
          "2.3",
          "2.4",
          "2.5",
          "2.6",
          "2.7",
          "2.8",
        ]
      : [
          "4.8",
          "4.7",
          "4.6",
          "4.5",
          "4.4",
          "4.3",
          "4.2",
          "4.1",
          "3.1",
          "3.2",
          "3.3",
          "3.4",
          "3.5",
          "3.6",
          "3.7",
          "3.8",
        ];
    

  // Elegir las imágenes según la cara
  const imagenes = lado === "arriba" ?
  cara === "vestibular" ? imagenesArribaVestibular : imagenesArribaPalatina
  : cara === "vestibular" ? imagenesAbajoVestibular : imagenesAbajoPalatina
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
          const profundidadSondaje = caraData.profundidadSondaje || [
            "",
            "",
            "",
          ];

          // Convertir datos a números o null
          const margenData = margenGingival.map((v) =>
            v === "" || v === "-" ? null : Number(v)
          );
          const profundidadData = profundidadSondaje.map((v) =>
            v === "" || v === "-" ? null : Number(v)
          );

          return (
            <DienteConGrafica
              key={`${numeroDiente}-${cara}-${index}`}
              index={index}
              cara={cara}
              imagen={imagenes[index]}
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
            {[-5, 0, 5].map((val) => (
              <span key={val} className="px-1 py-0.5 bg-gray-100 rounded">
                {val}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
