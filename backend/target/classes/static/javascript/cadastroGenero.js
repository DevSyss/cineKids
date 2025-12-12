const badges = document.querySelectorAll(".badge");
let classificacaoSelecionada = "";

badges.forEach(badge => {
    badge.addEventListener("click", () => {
        badges.forEach(btn => btn.classList.remove("active"));
        badge.classList.add("active");
        classificacaoSelecionada = badge.dataset.value;
    });
});

document.getElementById("formGenero").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("mensagem").innerHTML =
        "Gênero salvo com sucesso! 🎬✔️";
});