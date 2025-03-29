describe('pruevas en <democomponent />', () => {

    test('Esta prueba no deberia de fallar ', () => {

        // 1. Inicializacion
        const membro = "Fernando";

        //2. Estimulo
        const mensaje2 = membro.trim();

        //3. Observar el resultado
        expect(mensaje2).toBe("Fernando");
    });
})







