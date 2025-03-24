
const personajes = ['goku', 'vegeta', 'trunks'];

const [ personaje1, personaje2, personaje3] = personajes;

// console.log(personaje1, personaje2, personaje3);

const usestate = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = usestate('Goku');
setNombre();