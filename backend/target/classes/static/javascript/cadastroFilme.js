const classItems = document.querySelectorAll(".class-item");

classItems.forEach(item => {
    item.addEventListener("click", () => {
        classItems.forEach(i => i.classList.remove("ativo"));
        item.classList.add("ativo");
    });
});

document.querySelector(".salvar").addEventListener("click", () => {
    alert("Filme salvo com sucesso!");
});