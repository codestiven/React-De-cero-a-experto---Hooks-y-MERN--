import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr.js';


describe('pruevas en 07-deses-arr', () => {


    test('debemos de retornar un arreglo', () => { 

        const [letter, number] = retornaArreglo();

        // expect(letter).toBe('ABC');


        expect(typeof letter).toBe('string');
        expect(typeof number).toBe('number');

        expect(letter).toEqual(expect.any(String));



    });
  
})
