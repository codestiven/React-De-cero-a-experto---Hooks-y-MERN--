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

    test('debe de llamar onNewcategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const OnAddCategory = jest.fn(); // Crea una función simulada para verificar si se llama correctamente
       

        render(<AddCategory OnAddCategory={OnAddCategory} />)

        const input = screen.getByRole('textbox'); // Obtiene el elemento del input por su rol
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(OnAddCategory).toHaveBeenCalled();
        expect(OnAddCategory).toHaveBeenCalledTimes(1);
        expect(OnAddCategory).toHaveBeenCalledWith(inputValue); // Verifica que la función se llame con el valor correcto

        screen.debug() // Muestra el DOM actual en la consola para depuración
      
    })

    test('no debe de llamar si el input está vacío', () => {
        const OnAddCategory = jest.fn(); // Función simulada
        render(<AddCategory OnAddCategory={OnAddCategory} />)

        const input = screen.getByRole('textbox'); // Asegura obtener el input
        const form = screen.getByRole('form');

        // Aseguramos que el input esté vacío (por si tuviera algún valor por defecto)
        fireEvent.input(input, { target: { value: '' } });

        fireEvent.submit(form);

        expect(OnAddCategory).not.toHaveBeenCalled(); // Asegura que no se llamó
    });

    


})
