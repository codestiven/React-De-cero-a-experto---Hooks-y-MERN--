import { render } from "@testing-library/react"
import FistApp from "../src/FistApp"
import React from 'react';

describe('Pruevas en <FistApp/>', () => {

    // test('debe de hacer match con el snapshot', () => {
    //     const titulo = 'Hola, soy Goku'

    //     const {container} = render(<FistApp title={titulo} subtitle="Soy un subtitulo" />)

    //     expect(container).toMatchSnapshot()
      
    // })

    test ('debe de mostrar el titulo en un h1', () => {
        const titulo = 'Hola, soy Goku'

        const {container,getByText,getByTestId} = render(<FistApp title={titulo} subtitle="Soy un subtitulo" />)

        expect(getByText(titulo)).toBeTruthy()

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(titulo)

        expect(getByTestId('test-title').innerHTML).toContain(titulo)
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
            const titulo = 'Hola, soy Goku';
            const subtitle = 'Soy un subtitulo'
            const { getByText } = render(
            <FistApp 
            title={titulo} 
            subtitle="Soy un subtitulo"
             />
        )
            expect(getByText(subtitle)).toBeTruthy()


    })




})
