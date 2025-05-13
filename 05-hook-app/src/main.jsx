import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HooksApp from './hooksApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
