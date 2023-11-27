let listaUsuarios = [
    { id: 1, nome: 'Usuário 1', email: 'usuario1@example.com' },
    { id: 2, nome: 'Usuário 2', email: 'usuario2@example.com' },
    { id: 3, nome: 'Usuário 3', email: 'usuario3@example.com' }
]
  
function criarUsuario(novoUsuario) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!novoUsuario || !novoUsuario.nome || !novoUsuario.email) {
        reject(new Error('Os dados do usuário são inválidos.'))
    } else {
        const novoId = listaUsuarios.length > 0 ? listaUsuarios[listaUsuarios.length - 1].id + 1 : 1
        novoUsuario.id = novoId
        listaUsuarios.push(novoUsuario)
        resolve(novoUsuario)
    }
    }, 1000)
})
}
  
function lerUsuarios() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (listaUsuarios.length === 0) {
        reject(new Error('A lista de usuários está vazia.'))
    } else {
        resolve(listaUsuarios)
    }
    }, 1000)
})
}
  
function atualizarUsuario(id, novosDados) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const usuarioIndex = listaUsuarios.findIndex(usuario => usuario.id === id)
        if (usuarioIndex === -1) {
            reject(new Error('Usuário não encontrado.'))
        } else {
            listaUsuarios[usuarioIndex] = { ...listaUsuarios[usuarioIndex], ...novosDados }
            resolve(listaUsuarios[usuarioIndex])
        }
        }, 1000)
    })
}
  
function excluirUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const usuarioIndex = listaUsuarios.findIndex(usuario => usuario.id === id)
        if (usuarioIndex === -1) {
            reject(new Error('Usuário não encontrado.'))
        } else {
            const usuarioRemovido = listaUsuarios.splice(usuarioIndex, 1)[0]
            resolve(usuarioRemovido)
        }
        }, 1000)
    })
}
  