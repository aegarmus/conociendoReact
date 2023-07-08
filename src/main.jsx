import React from 'react'
import ReactDOM from 'react-dom/client'

import  {Componente} from './Componente.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Componente nombre='Carlos'/>
  </React.StrictMode>,
)
