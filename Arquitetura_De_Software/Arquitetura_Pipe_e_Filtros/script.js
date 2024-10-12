document.getElementById('processButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');

    // Filtro 1: Converter para letras maiúsculas
    const upperCaseText = toUpperCase(inputText);

    // Filtro 2: Remover espaços extras
    const trimmedText = removeExtraSpaces(upperCaseText);

    // Filtro 3: Contar número de palavras
    const wordCount = countWords(upperCaseText);

    // Exibir resultado
    outputDiv.innerHTML = `
        <strong>Texto Original:</strong> ${inputText}<br>
        <strong>Texto em Maiúsculas:</strong> ${upperCaseText}<br>
        <strong>Texto sem Espaços Extras:</strong> ${trimmedText}<br>
        <strong>Número de Palavras:</strong> ${wordCount}
    `;
});

function toUpperCase(text) {
    return text.toUpperCase();
}

function removeExtraSpaces(text) {
    return text.replace(/\s+/g, '').trim();
}

function countWords(text) {
    return text ? text.split(' ').length : 0;
}
