import arriba11 from "../assets/tabla1/periodontograma-dientes-arriba-11.png";
import arriba12 from "../assets/tabla1/periodontograma-dientes-arriba-12.png";
import arriba13 from "../assets/tabla1/periodontograma-dientes-arriba-13.png";
import arriba14 from "../assets/tabla1/periodontograma-dientes-arriba-14.png";
import arriba15 from "../assets/tabla1/periodontograma-dientes-arriba-15.png";
import arriba16 from "../assets/tabla1/periodontograma-dientes-arriba-16.png";
import arriba17 from "../assets/tabla1/periodontograma-dientes-arriba-17.png";
import arriba18 from "../assets/tabla1/periodontograma-dientes-arriba-18.png";

// Si tienes imágenes para "abajo", agrégalas aquí:

// ... más imágenes abajoXX...

const imagenesPorLado = {
  arriba: [arriba18, arriba17, arriba16, arriba15, arriba14, arriba13, arriba12, arriba11],
//   abajo: [abajo41 /*, abajo42, abajo43, etc. */]
};

const Grafica = ({ cara, lado }) => {
  const imagenes = imagenesPorLado[lado];

  if (!imagenes) {
    return <p>Error: Lado "{lado}" no válido.</p>;
  }

  if (!["vestibular", "palatina", "lingual"].includes(cara)) {
    return <p>Error: Cara "{cara}" no válida.</p>;
  }

  return (
    <div className="container" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px", background: "white"}}>
      {imagenes.map((img, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: 80,
            height: 100
          }}
        />
      ))}
    </div>
  );
};

export default Grafica;
