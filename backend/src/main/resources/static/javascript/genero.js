const API_URL = "http://localhost:8080/api/generos"; // Define o endpoint da API de gêneros

// Adiciona ouvinte para executar a função assim que o HTML carregar
document.addEventListener("DOMContentLoaded", listarGeneros);

function listarGeneros() {
    fetch(API_URL) // Faz a requisição GET ao servidor
        .then(res => res.json()) // Converte a resposta bruta para um array de objetos JSON
        .then(generos => {
            const container = document.getElementById("listaGeneros");
            container.innerHTML = ""; // Limpa o container para evitar duplicidade na recarga

            // Itera sobre cada gênero retornado pela API
            generos.forEach(g => {
                // Cria um elemento HTML <a> (link) dinamicamente na memória
                const link = document.createElement("a");
                link.className = "btn-genero"; // Atribui classe CSS para estilização
                
                // Define o texto do link com o nome do gênero vindo do backend
                link.innerText = g.nome;
                
                // Define o destino do link, passando o ID do gênero como parâmetro na URL
                // Ex: filmes.html?idGenero=5 (para ser capturado na outra página)
                link.href = `filmes.html?idGenero=${g.id}`;
                
                // Insere o elemento criado dentro do container na página real (DOM)
                container.appendChild(link);
            });
        });
}