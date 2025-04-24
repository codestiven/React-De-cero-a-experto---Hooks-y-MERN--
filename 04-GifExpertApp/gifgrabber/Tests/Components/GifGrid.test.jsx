import { render } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente ', () => {
      

        render(<GifGrid category={category} />)
        expect(screen.getByText('Loading...')).toBeTruthy(); // Verifica que el texto "Loading..." esté presente en el DOM
        expect(screen.getByText(category)).toBeTruthy(); // Verifica que el nombre de la categoría esté presente en el DOM
    })
    
  
})
