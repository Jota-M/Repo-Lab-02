function crearUsuario(name: string, ci: string, email: string) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = crearUsuario('Josse', '8620597', 'josse@gmail.com');
console.log(usuario);
