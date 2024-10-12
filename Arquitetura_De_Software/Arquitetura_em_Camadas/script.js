// Lógica de Negócios

const btn = document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const age = parseInt(document.getElementById('ageInput').value);
    const messageContainer = document.getElementById('messageContainer');
    const userForm = document.getElementById('userForm');

    if (age > 18) {
        saveUser(name, age); // Chama a função de persistência
        messageContainer.textContent = 'Usuário cadastrado com sucesso!';
        messageContainer.style.color = 'green';
        console.log(userForm)
       // Verifica se userForm foi encontrado
       if (userForm) {
        userForm.reset(); // Limpa o formulário após o cadastro
        } else {
            console.error('userForm não encontrado');
        }
        renderUserList(); // Atualiza a lista de usuários
    } else {
        messageContainer.textContent = 'A idade deve ser maior que 18 anos!';
        messageContainer.style.color = 'red';
    }

    function renderUserList() {
        // Limpa a lista atual
        userList.innerHTML = '';

        // Obtém os usuários e os exibe
        const users = getUsers();
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.age} anos`;
            userList.appendChild(li);
        });
    }
});
