import { render } from "@testing-library/react"
import FistApp from "../src/FistApp"
import React from 'react';

describe('Pruevas en <FistApp/>', () => {

    test('debe de hacer match con el snapshot', () => {

        render(<FistApp title="Hola, soy Goku" subtitle="Soy un subtitulo" />)
      
    })
    
  
})
