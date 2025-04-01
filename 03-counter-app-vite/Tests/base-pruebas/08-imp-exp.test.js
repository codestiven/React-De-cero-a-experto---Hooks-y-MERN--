import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp.js';



describe('Pruebas en 08-imp-exp', () => {
    test('Getherobyid debe de deborber un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('Getherobyid debe de retornar undefined si heroe no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        console.log(heroe);

        expect(heroe).toBeFalsy();
    })
    
    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes.map(hero => hero.name)).toEqual(['Batman', 'Superman', 'Flash'])

    })

    // Debe de retornar un arreglo con los héroes de Marvel
    // Length === 1
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes.map(hero => hero.name)).toEqual(['Spiderman', 'Wolverine'])
    })
})
