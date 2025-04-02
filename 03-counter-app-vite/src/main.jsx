import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './HelloWordApp';
import FistApp from './FistApp';
import CounterApp from './CounterApp';


import './Style.css';







ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={10}  /> */}
        <FistApp title="Hola, soy Goku" subtitle="Soy un subtitulo" />
    </React.StrictMode>
);