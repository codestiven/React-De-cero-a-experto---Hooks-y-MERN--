import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('pruevas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de deborber un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({ 
                    id: 1,
                    name: 'Batman', 
                    owner: 'DC',
                });
                done();
            })

    })



})
