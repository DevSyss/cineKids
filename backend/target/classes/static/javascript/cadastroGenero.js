// Seleciona o formulário pelo ID e "escuta" o evento de envio (submit)
document.getElementById("formGenero").addEventListener("submit", function(e) {
    e.preventDefault(); // Bloqueia o recarregamento automático da página (comportamento padrão do form)

    const nomeInput = document.getElementById("nomeGenero").value; // Captura o valor digitado no input

    // Inicia a requisição para o Backend
    fetch("http://localhost:8080/api/generos", {
        method: "POST", // Define o método HTTP para CRIAR um novo recurso
        headers: { "Content-Type": "application/json" }, // Avisa o servidor que estamos enviando dados em JSON
        
        // Corpo da requisição: Converte o objeto JS em string JSON para envio
        // Ex: { nome: "Drama" } vira '{"nome": "Drama"}'
        body: JSON.stringify({ nome: nomeInput })
    }).then(() => {
        alert("Gênero salvo!"); // Feedback de sucesso
        window.location.href = "cadastroGenero.html"; // Redireciona para a tela de listagem
    }).catch(err => alert("Erro ao salvar gênero")); // Tratamento de erro caso a API falhe
});