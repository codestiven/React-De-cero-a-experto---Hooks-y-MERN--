import { render } from '@testing-library/react';
import  Gifitem  from '../../src/Components/Gifitem.jsx';

describe('Pruebas en <Gifitem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<Gifitem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

});