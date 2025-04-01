import { getImagen } from '../../src/base-pruebas/11-async-await.js';


describe('pruebas en 11-async-await', () => {
  test('getImagen debe de retornar un URL DE LA IMAGEN', async() => {
    
    const resp = await getImagen();


      expect(resp).toBe('no existe')

  })
  
})
