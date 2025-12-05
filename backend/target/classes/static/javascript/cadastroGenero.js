document.getElementById("formGenero").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;
    const url = document.getElementById("urlCapa").value;
    const ano = document.getElementById("ano").value;
    const diretor = document.getElementById("diretor").value;

    const lista = document.getElementById("lista");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${url}" alt="Capa do filme">
        <h3>${nome}</h3>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>Ano:</strong> ${ano}</p>
        <p><strong>Diretor:</strong> ${diretor}</p>
    `;

    lista.appendChild(card);

    // Limpando formulário
    document.getElementById("formGenero").reset();
});