import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

// 👇 Asegúrate de mockear antes de cualquier test
jest.mock("../../src/Hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        // 👈 Aquí agregamos un valor de retorno inicial
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        // 👇 Verifica que hay 2 imágenes renderizadas
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});
