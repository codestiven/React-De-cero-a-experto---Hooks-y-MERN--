import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HooksApp from './hooksApp.jsx'
import CounterApp from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterwithCustomHook.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>,
)
