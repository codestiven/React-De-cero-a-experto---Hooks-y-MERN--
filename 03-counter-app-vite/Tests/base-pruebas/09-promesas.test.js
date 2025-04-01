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

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                // No debe de llegar aqui
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })

})
