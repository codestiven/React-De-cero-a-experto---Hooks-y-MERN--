describe('pruebas en 05-funciones', () => {
  

    test('getUserActivo debe retornar un objeto', () => { 

        const getUser = () => ({
            uid: 'ABC123',
            username: 'El_Papi1502'
        });

        const user = getUser();
        expect(user).toEqual({
            uid: 'ABC123',
            username: 'El_Papi1502'
        });



      });

      test ('getUsuarioActivo debe retornar un objeto', () => { 

        const getUsuarioActivo = ( nombre ) =>({
            uid: 'ABC567',
            username: nombre
        })

        const user = getUsuarioActivo('Fernando');
        expect(user).toEqual({
            uid: 'ABC567',
            username: 'Fernando'
        });



      });

})
