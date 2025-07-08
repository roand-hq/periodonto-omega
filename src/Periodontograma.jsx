import './App.css'
import { useDientes } from './hooks/useDientes';
import TablaDientes from './Components/tabla';
const Periodontograma = () => {
  const {
    dientes,
    actualizarDiente,
    actualizarCara,
    resetearDientes
  } = useDientes();

  return (
   <>
   <TablaDientes></TablaDientes>
   </>
  );
};

export default Periodontograma;
