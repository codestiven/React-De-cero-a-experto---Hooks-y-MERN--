


export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'fernando';


console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );