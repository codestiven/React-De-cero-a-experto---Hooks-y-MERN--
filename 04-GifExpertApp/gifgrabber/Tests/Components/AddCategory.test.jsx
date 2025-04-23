import { fireEvent , render , screen } from "@testing-library/react"
import { AddCategory } from "../../src/Components/AddCategory"

describe('pruevas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory OnAddCategory={() => { }} />)
        const input = screen.getByRole('textbox'); // Obtiene el elemento del input por su rol

        fireEvent.input(input, { target: { value: 'Saitama' } }) // Simula el evento de cambio en el input
        expect(input.value).toBe('Saitama') // Verifica que el valor del input sea 'Saitama'

        screen.debug() // Muestra el DOM actual en la consola para depuración

    })


})
