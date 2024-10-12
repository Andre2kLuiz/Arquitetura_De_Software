// Persistência de Dados
const users = []; // Array para armazenar os usuários

// Função para salvar um usuário
function saveUser(name, age) {
    const user = { name: name, age: age };
    users.push(user); // Adiciona o usuário ao array
    console.log(users); // Log para verificar os usuários cadastrados
}

function getUsers() {
    return users; // Retorna a lista de usuários
}

