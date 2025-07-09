import { useDientes } from "../hooks/useDientes";
export default function TablaDientes() {
  const { dientes, actualizarDiente, actualizarCara, resetearDientes } =
    useDientes();

  const esSuperior = (numero) =>
    numero.startsWith("1") || numero.startsWith("2");

  // Manejo de movilidad con límites
  const handleMovilidadChange = (numero, valor) => {
    // Permitir vacío o solo "-"
    if (valor === "" || valor === "-") {
      actualizarDiente(numero, { movilidad: valor });
      return;
    }

    // Validar que sea número
    const num = Number(valor);
    if (isNaN(num)) {
      // No actualizar si no es número válido
      return;
    }

    // Limitar rango
    let limitado = num;
    if (num < -3) limitado = -3;
    if (num > 3) limitado = 3;

    actualizarDiente(numero, { movilidad: limitado });
  };
  const handleProfundidadChange = (numero, cara, index, valor) => {
    // Permitir que el campo quede vacío o "-" temporalmente
    if (valor === "" || valor === "-") {
      handleCaraChange(numero, cara, "profundidadSondaje", index, valor);
      return;
    }

    const num = Number(valor);
    if (isNaN(num)) return;

    // Limitar valores aceptados (ej: de 0 a 15 mm)
    const limitado = Math.max(0, Math.min(15, num));

    handleCaraChange(numero, cara, "profundidadSondaje", index, limitado);
  };

  const handleMargenGingivalChange = (numero, cara, i, valor) => {
    // Permitir vacío o solo "-"
    if (valor === "" || valor === "-") {
      const actuales = dientes[numero].caras[cara].margenGingival || [];
      const nuevosMargenes = [...actuales];
      nuevosMargenes[i] = valor;
      actualizarCara(numero, cara, { margenGingival: nuevosMargenes });
      return;
    }

    const num = Number(valor);
    if (isNaN(num)) return; // no actualizar

    let limitado = num;
    if (num < -5) limitado = -5;
    if (num > 5) limitado = 5;

    const actuales = dientes[numero].caras[cara].margenGingival || [];
    const nuevosMargenes = [...actuales];
    nuevosMargenes[i] = limitado;
    actualizarCara(numero, cara, { margenGingival: nuevosMargenes });
  };

  const handleDienteChange = (numero, campo, valor) => {
    actualizarDiente(numero, { [campo]: valor });
  };

  const handleCaraChange = (numero, cara, campo, index, valor) => {
    const caraActual = dientes[numero].caras[cara];
    let nuevosCampos = {};

    if (Array.isArray(caraActual[campo])) {
      const nuevoArray = [...caraActual[campo]];
      nuevoArray[index] = valor;
      nuevosCampos[campo] = nuevoArray;
    } else {
      nuevosCampos[campo] = valor;
    }

    actualizarCara(numero, cara, nuevosCampos);
  };
  const handleFurcaClick = (numero, cara, index) => {
    const actual = dientes[numero]?.caras?.[cara]?.furca?.[index] || "";
    let nuevoValor;

    if (actual === "1") nuevoValor = "2";
    else if (actual === "2") nuevoValor = "3";
    else nuevoValor = "1"; // si está vacío o cualquier otro valor, empieza desde 1

    handleCaraChange(numero, cara, "furca", index, nuevoValor);
  };
  // Dientes superior e inferior
  const dientesSuperiores = [
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
  ];
  const dientesInferiores = [
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

  // Tabla parámetros generales (implante, movilidad, pronóstico)
  const renderTablaGenerales = (listaDientes) => (
    <div className="bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4">
      <table className="w-full border-collapse border border-gray-300 text-xs">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-100 p-2 sticky left-0 z-10 min-w-[150px]">
              Parámetro
            </th>
            {listaDientes.map((numero) => (
              <th
                key={numero}
                className="border border-gray-300 bg-gray-100 p-2 min-w-[60px]"
              >
                {numero}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Implante */}
          <tr>
            <td className="border border-gray-300 bg-blue-50 p-3 font-semibold sticky left-0 z-10 text-blue-700">
              Implante
            </td>
            {listaDientes.map((numero) => (
              <td
                key={numero}
                className="border border-gray-300 p-2 text-center"
              >
                <label className="inline-block w-5 h-5 cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={dientes[numero]?.implante || false}
                    onChange={(e) =>
                      handleDienteChange(numero, "implante", e.target.checked)
                    }
                    className="peer appearance-none w-full h-full border border-gray-400 rounded-sm checked:bg-blue-600"
                  />
                  <span className="absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-black"></span>
                </label>
              </td>
            ))}
          </tr>

          {/* Movilidad */}
          <tr>
            <td className="border border-gray-300 bg-green-50 p-3 font-semibold sticky left-0 z-10 text-green-700">
              Movilidad
            </td>
            {listaDientes.map((numero) => (
              <td
                key={numero}
                className="border border-gray-300 p-2 text-center"
              >
                <input
                  type="text"
                  value={dientes[numero]?.movilidad ?? ""}
                  min={-3}
                  max={3}
                  onChange={(e) =>
                    handleMovilidadChange(numero, e.target.value)
                  }
                  className="w-full px-1 py-1 text-center border border-gray-300 rounded focus:border-green-500 focus:ring-green-200"
                />
              </td>
            ))}
          </tr>

          {/* Pronóstico */}
          <tr>
            <td className="border border-gray-300 bg-purple-50 p-3 font-semibold sticky left-0 z-10 text-purple-700">
              Pronóstico individual
            </td>
            {listaDientes.map((numero) => (
              <td
                key={numero}
                className="border border-gray-300 p-2 text-center"
              >
                <input
                  type="text"
                  value={dientes[numero]?.pronostico || ""}
                  onChange={(e) =>
                    handleDienteChange(numero, "pronostico", e.target.value)
                  }
                  className="w-full px-1 py-1 text-center border border-gray-300 rounded focus:border-purple-500 focus:ring-purple-200"
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  // Tabla para caras (vestibular o interna)
  const renderTablaCara = (listaDientes, cara, titulo, colorBg, colorText) => {
    // Definimos si la cara es interna o vestibular para controlar furca y estilos
    const esCaraInterna = cara === "palatina";

    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4">
        <h3
          className={`text-xl font-bold mb-4 text-center text-white rounded py-2 bg-gradient-to-r ${colorBg}`}
        >
          {titulo}
        </h3>
        <div className="bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4">
          <table className="w-full border-collapse border border-gray-300 text-xs">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-gray-100 p-2 sticky left-0 z-10 min-w-[150px]">
                  Parámetro
                </th>
                {listaDientes.map((numero) => (
                  <th
                    key={numero}
                    className="border border-gray-300 bg-gray-100 p-2 min-w-[60px]"
                  >
                    {numero}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Furca */}
              <tr>
                {/* El td con label: fondo oscuro y texto blanco, legible */}
                <td
                  className={`border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${colorBg} ${colorText} select-none`}
                  style={{ minWidth: "150px" }}
                >
                  Furca
                </td>

                {listaDientes.map((numero) => (
                  <td key={numero} className="border p-2 text-center">
                    {esCaraInterna ? (
                      <div className="flex justify-center gap-1">
                        {[0, 1].map((idx) => (
                          <div
                            key={idx}
                            onClick={() => handleFurcaClick(numero, cara, idx)}
                            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none"
                          >
                            {(() => {
                              const valor =
                                dientes[numero]?.caras?.[cara]?.furca?.[idx];
                              if (valor === "1")
                                return (
                                  <img
                                    src="src\assets\vacio.png"
                                    alt="Furca 1"
                                    className="w-5 h-5 select-none pointer-events-none"
                                  />
                                );
                              if (valor === "2")
                                return (
                                  <img
                                    src="src\assets\mediolleno.png"
                                    alt="Furca 2"
                                    className="w-5 h-5 select-none pointer-events-none"
                                  />
                                );
                              if (valor === "3")
                                return (
                                  <img
                                    src="src\assets\lleno.png"
                                    alt="Furca 3"
                                    className="w-5 h-5 select-none pointer-events-none"
                                  />
                                );
                              return null;
                            })()}
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Un solo input para furca si es vestibular (índice 1)
                      <div
                        onClick={() => handleFurcaClick(numero, cara, 1)}
                        className="w-full h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none"
                      >
                        {(() => {
                          const valor =
                            dientes[numero]?.caras?.[cara]?.furca?.[1];
                          if (valor === "1")
                            return (
                              <img
                                src="src\assets\vacio.png"
                                alt="Furca 1"
                                className="w-5 h-5 select-none pointer-events-none"
                              />
                            );
                          if (valor === "2")
                            return (
                              <img
                                src="src\assets\mediolleno.png"
                                alt="Furca 2"
                                className="w-5 h-5 select-none pointer-events-none"
                              />
                            );
                          if (valor === "3")
                            return (
                              <img
                                src="src\assets\lleno.png"
                                alt="Furca 3"
                                className="w-5 h-5 select-none pointer-events-none" 
                              />
                            );
                          return null;
                        })()}
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Sangrado */}
              <tr>
                <td
                  className={`border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${colorBg} ${colorText} select-none`}
                  style={{ minWidth: "150px" }}
                >
                  Sangrado
                </td>
                {listaDientes.map((numero) => (
                  <td key={numero} className="border p-2 text-center">
                    <div className="flex gap-1 justify-center">
                      {[0, 1, 2].map((i) => (
                        <label
                          key={i}
                          className="inline-block w-4 h-4 cursor-pointer relative"
                        >
                          <input
                            type="checkbox"
                            checked={
                              dientes[numero]?.caras?.[cara]?.sangrado?.[i] ||
                              false
                            }
                            onChange={(e) =>
                              handleCaraChange(
                                numero,
                                cara,
                                "sangrado",
                                i,
                                e.target.checked
                              )
                            }
                            className="peer appearance-none w-full h-full border border-gray-400 rounded-sm"
                          />
                          <span className="absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-red-600"></span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Placa */}
              <tr>
                <td
                  className={`border p-3 font-semibold sticky left-0 z-10  bg-gradient-to-r ${colorBg} ${colorText} select-none`}
                  style={{ minWidth: "150px" }}
                >
                  Placa
                </td>
                {listaDientes.map((numero) => (
                  <td key={numero} className="border p-2 text-center">
                    <div className="flex gap-1 justify-center">
                      {[0, 1, 2].map((i) => (
                        <label
                          key={i}
                          className="inline-block w-4 h-4 cursor-pointer relative"
                        >
                          <input
                            type="checkbox"
                            checked={
                              dientes[numero]?.caras?.[cara]?.placa?.[i] ||
                              false
                            }
                            onChange={(e) =>
                              handleCaraChange(
                                numero,
                                cara,
                                "placa",
                                i,
                                e.target.checked
                              )
                            }
                            className="peer appearance-none w-full h-full border border-gray-400 rounded-sm"
                          />
                          <span className="absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-blue-600"></span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Anchura encía */}
              <tr>
                <td
                  className={`border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${colorBg} ${colorText} select-none`}
                  style={{ minWidth: "150px" }}
                >
                  Anchura encía
                </td>
                {listaDientes.map((numero) => (
                  <td key={numero} className="border p-2 text-center">
                    <input
                      type="text"
                      value={dientes[numero]?.caras?.[cara]?.anchuraEncia || ""}
                      onChange={(e) =>
                        handleCaraChange(
                          numero,
                          cara,
                          "anchuraEncia",
                          0,
                          e.target.value
                        )
                      }
                      className="w-full px-1 py-1 text-center border border-gray-300 rounded focus:ring focus:outline-none"
                    />
                  </td>
                ))}
              </tr>

              {/* Margen gingival */}
              <tr>
                <td
                  className={`border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${colorBg} ${colorText} select-none`}
                  style={{ minWidth: "150px" }}
                >
                  Margen gingival
                </td>
                {listaDientes.map((numero) => (
                  <td key={numero} className="border p-2 text-center">
                    <div className="flex gap-1 justify-center">
                      {[0, 1, 2].map((i) => (
                        <input
                          key={i}
                          type="text"
                          value={
                            dientes[numero]?.caras?.[cara]?.margenGingival?.[
                              i
                            ] ?? ""
                          }
                          onChange={(e) =>
                            handleMargenGingivalChange(
                              numero,
                              cara,
                              i,
                              e.target.value,
                              actualizarCara
                            )
                          }
                          className="w-6 h-6 text-center text-xs border border-gray-300 rounded focus:ring focus:outline-none"
                        />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Profundidad de sondaje */}
              <tr>
                <td
                  className={`border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${colorBg} ${colorText} select-none`}
                  style={{ minWidth: "150px" }}
                >
                  Profundidad de sondaje
                </td>
                {listaDientes.map((numero) => (
                  <td key={numero} className="border p-2 text-center">
                    <div className="flex gap-1 justify-center">
                      {[0, 1, 2].map((i) => (
                        <input
                          key={i}
                          type="text"
                          value={
                            dientes[numero]?.caras?.[cara]
                              ?.profundidadSondaje?.[i] ?? ""
                          }
                          onChange={(e) =>
                            handleProfundidadChange(
                              numero,
                              cara,
                              i,
                              e.target.value
                            )
                          }
                          className="w-6 h-6 text-center text-xs border border-gray-300 rounded focus:ring focus:outline-none"
                        />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Sistema de Registro Dental
          </h1>
          <button
            onClick={resetearDientes}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Resetear todos los dientes
          </button>
        </div>

        {/* SUPERIOR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
            SUPERIOR
          </h2>
          {renderTablaGenerales(dientesSuperiores)}
          {renderTablaCara(
            dientesSuperiores,
            "vestibular",
            "Cara Vestibular",
            "from-blue-600 to-indigo-700",
            "text-white"
          )}
          {renderTablaCara(
            dientesSuperiores,
            "palatina",
            "Cara Palatina",
            "from-teal-600 to-green-700",
            "text-white"
          )}
        </section>

        {/* INFERIOR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
            INFERIOR
          </h2>
          {renderTablaGenerales(dientesInferiores)}
          {renderTablaCara(
            dientesInferiores,
            "vestibular",
            "Cara Vestibular",
            "from-orange-500 to-red-600",
            "text-white"
          )}
          {renderTablaCara(
            dientesInferiores,
            "lingual",
            "Cara Lingual",
            "from-yellow-600 to-orange-700",
            "text-white"
          )}
        </section>
      </div>
    </div>
  );
}
