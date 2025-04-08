import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GifExpertApp from './GifExpertApp.jsx'

// const apiKey = 'zNXMRK9dCTkKzPqJ9Gq4xJ7KXf3JYYuh';
// const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    < GifExpertApp />
  </StrictMode>,
)
