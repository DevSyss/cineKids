document.getElementById("formFilme").addEventListener("submit", function(e) {
    e.preventDefault();

    const filme = {
        nome: document.getElementById("nome").value,
        classificacao: document.getElementById("classificacao").value,
        ano: document.getElementById("ano").value,
        diretor: document.getElementById("diretor").value,
        url: document.getElementById("url").value
    };

    console.log("Filme cadastrado:", filme);






    

    alert("Filme cadastrado com sucesso!");

    document.getElementById("formFilme").reset();
});