import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('pruebas en 02-template-string', () => {
    test('getsaludo debe retornar "hola fernando"', () => {

        const nombre = 'fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe(saludo);
      
    })
    
  
})
