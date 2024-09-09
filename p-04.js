function crearUsuario(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var usuario = crearUsuario('Josse', '8620597', 'josse@gmail.com');
console.log(usuario);
