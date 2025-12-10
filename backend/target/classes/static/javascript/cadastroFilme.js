const badges = document.querySelectorAll(".badge");
const inputClassificacao = document.getElementById("classificacao");

badges.forEach(badge => {
    badge.addEventListener("click", () => {
        badges.forEach(b => b.classList.remove("active"));
        badge.classList.add("active");
        inputClassificacao.value = badge.dataset.value;
    });
});


document.getElementById("formFilme").addEventListener("submit", function(e) {
    e.preventDefault();

    const filme = {
        nome: document.getElementById("nome").value,
        ano: document.getElementById("ano").value,
        descricao: document.getElementById("descricao").value,
        genero: document.getElementById("genero").value,
        url: document.getElementById("url").value,
        classificacao: document.getElementById("classificacao").value
    };

    if (!filme.classificacao) {
        alert("Selecione a classificação!");
        return;
    }

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    document.getElementById("mensagem").innerText = "Filme cadastrado com sucesso!";
    document.getElementById("formFilme").reset();
    badges.forEach(b => b.classList.remove("active"));
});