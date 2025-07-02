import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HooksApp from './hooksApp.jsx'
import CounterApp from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterwithCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'  // ✅ Corregido
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
import MultipleCustomHook from './03-examples/MultipleCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHook />
  </StrictMode>,
)
