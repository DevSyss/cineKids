const API_URL = "http://localhost:8080/filmes";
const GENRES_URL = "http://localhost:8080/generos";

// Verifica se há parâmetros na URL (ex: cadastro.html?id=10)
const paramsUrl = new URLSearchParams(window.location.search);
const idEdicao = paramsUrl.get("id"); // Se existir, guarda o ID; se não, fica null

// 'async' permite usar 'await' dentro da função para esperar requisições terminarem
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Carrega o <select> de gêneros primeiro. 
    // O 'await' é crucial aqui: garante que as opções existam antes de tentarmos selecionar uma na edição.
    await carregarGeneros();

    // 2. Se for Edição (tem ID na URL):
    if (idEdicao) {
        prepararModoEdicao(); // Ajusta textos e cores da tela
        await carregarDadosFilme(idEdicao); // Busca os dados do filme e preenche os campos
    }

    // Adiciona o evento de salvar ao formulário
    document.getElementById("formFilme").addEventListener("submit", salvarFilme);
});

async function carregarGeneros() {
    try {
        const res = await fetch(GENRES_URL);
        const generos = await res.json();
        
        const select = document.getElementById("selectGenero");
        select.innerHTML = '<option value="">Selecione um gênero</option>'; // Opção padrão
        
        // Preenche o dropdown com os gêneros vindos do banco
        generos.forEach(g => {
            select.innerHTML += `<option value="${g.id}">${g.nome}</option>`;
        });
    } catch (error) {
        alert("Erro ao carregar gêneros: " + error);
    }
}

function prepararModoEdicao() {
    // Apenas mudança visual para indicar ao usuário que ele está Editando
    document.getElementById("tituloPagina").innerText = "Editar Filme";
    const btn = document.getElementById("btnSalvar");
    btn.innerText = "Atualizar Dados";
    btn.style.backgroundColor = "#d69e2e"; // Muda cor para amarelo/laranja (alerta visual)
}

async function carregarDadosFilme(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`); // GET /filmes/10
        const filme = await res.json();

        // Preenche os inputs com os dados recebidos do backend
        document.getElementById("titulo").value = filme.titulo;
        document.getElementById("ano").value = filme.ano;
        document.getElementById("descricao").value = filme.descricao;
        document.getElementById("urlCapa").value = filme.urlCapa;
        
        // Se o filme tem gênero, seleciona automaticamente a option correta no <select>
        if (filme.genero) {
            document.getElementById("selectGenero").value = filme.genero.id;
        }
    } catch (error) {
        alert("Erro ao buscar dados do filme: " + error);
        window.location.href = "filmes.html"; // Volta para listagem em caso de erro (ex: ID inválido)
    }
}

function salvarFilme(event) {
    event.preventDefault(); // Evita reload da página

    // Monta o objeto JSON. Nota: 'genero' é enviado como objeto { id: ... } 
    // para que o JPA no backend faça a associação correta.
    const filme = {
        titulo: document.getElementById("titulo").value,
        ano: document.getElementById("ano").value,
        diretor: document.getElementById("descricao").value,
        urlCapa: document.getElementById("urlCapa").value,
        genero: { id: document.getElementById("selectGenero").value }
    };

    // LÓGICA PRINCIPAL:
    // Se tem idEdicao, usa PUT (atualizar). Se não, usa POST (criar).
    const metodo = idEdicao ? "PUT" : "POST";
    // Se for edição, a URL precisa do ID no final (ex: /filmes/10).
    const url = idEdicao ? `${API_URL}/${idEdicao}` : API_URL;

    fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filme)
    })
    .then(() => {
        alert(idEdicao ? "Filme atualizado com sucesso!" : "Filme cadastrado com sucesso!");
        window.location.href = "filmes.html"; // Redireciona para a lista
    })
    .catch(err => alert("Erro ao salvar: " + err));
}