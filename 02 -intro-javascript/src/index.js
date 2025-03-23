// Tarea
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
