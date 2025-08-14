import './App.css'
import { useDientes } from './hooks/useDientes';
import TablaDientes from './Components/tabla';
const Periodontograma = ({savedState, onSave}) => {
  return (
   <>
   <TablaDientes savedState={savedState} onSave={onSave}></TablaDientes>
   </>
  );
};

export default Periodontograma;
