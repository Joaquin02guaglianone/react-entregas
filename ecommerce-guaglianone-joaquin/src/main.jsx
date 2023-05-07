import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { iniciarFirebase } from './componentes/firestore/config'
import './index.css'

iniciarFirebase

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
