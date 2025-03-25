import { heroes } from './data/heroes';

// const getheroesbyid = (id) => heroes.find((heroe) => heroe.id === id);

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getheroesbyid(2);
//     resolve(heroe);
//     reject('No se pudo encontrar el héroe');
//   }, 2000);
// });



// promesa.then((mensaje) => {
//   console.log(mensaje);
// }).catch((err) => {
//     console.warn(err);
// });


const getheroesbyidAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getheroesbyid(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el héroe');
      }
    }, 2000);
  });
}

getheroesbyidAsync(1)
  .then(console.log)
  .catch(console.warn);