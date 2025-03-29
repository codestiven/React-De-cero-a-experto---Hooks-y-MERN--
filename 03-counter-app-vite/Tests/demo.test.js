test('Esta prueba no deberia de fallar ', () => {
  
    if (1 === 0) {
        throw new Error('No deberia dividir por cero')

        
    }
})
