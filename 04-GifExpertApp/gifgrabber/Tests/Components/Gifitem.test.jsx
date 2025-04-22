import { render } from '@testing-library/react';
import  Gifitem  from '../../src/Components/Gifitem.jsx';

describe('Pruebas en <Gifitem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<Gifitem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        const { getByRole } = render(<Gifitem title={title} url={url} />);
        const { src, alt } = getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

});