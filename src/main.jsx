import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Periodontograma from './Periodontograma'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Periodontograma />
  </StrictMode>,
)
