const API_URL = "http://localhost:8080/filmes"; // Endpoint base da API

// Executa 'listarFilmes' assim que o HTML da página terminar de carregar
document.addEventListener("DOMContentLoaded", listarFilmes);

function listarFilmes() {
    fetch(API_URL) // Faz requisição GET para buscar os dados
        .then(res => res.json()) // Converte a resposta para JSON
        .then(filmes => {
            const lista = document.getElementById("listaFilmes");
            lista.innerHTML = ""; // Limpa a lista atual para evitar duplicação

            // --- Lógica de Filtro ---
            const paramsUrl = new URLSearchParams(window.location.search);
            const idGenero = paramsUrl.get("idGenero"); // Captura idGenero da URL (ex: ?idGenero=1)

            if (idGenero) {
                // Filtra localmente os filmes pelo ID do gênero (caso backend retorne tudo)
                filmes = filmes.filter(f => f.genero && f.genero.id == idGenero);
            }

            // Exibe mensagem caso não existam filmes na lista
            if (filmes.length === 0) {
                lista.innerHTML += `<p style="grid-column: 1/-1; text-align: center; color: #666;">Nenhum filme encontrado.</p>`;
                return;
            }

            // --- Renderização ---
            let html = "";
            filmes.forEach(f => {
                html += `
                  <div class="filme-card">
                    <div class="acoes-filme">
                      <button class="btn-editar" onclick="editarFilme(${f.id})">✏️</button>
                      <button class="btn-excluir" onclick="excluirFilme(${f.id})">🗑️</button>
                    </div>

                    <img src="${f.urlCapa}" alt="${f.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=Sem+Capa'">
                    <strong>${f.titulo}</strong><br>
                    <em>${f.genero ? f.genero.nome : "Sem Gênero"}</em><br>
                    (${f.ano || ""}) - ${f.diretor || ""}
                  </div>
                `;
            });

            lista.innerHTML += html; // Insere todos os cards no DOM
        });
}

function editarFilme(id) {
    // Redireciona para página de cadastro enviando o ID na URL para edição
    window.location.href = `cadastrofilme.html?id=${id}`;
}

function excluirFilme(id) {
    // Solicita confirmação do usuário antes de apagar
    if (!confirm("Tem certeza que deseja remover este filme?")) return;

    fetch(`${API_URL}/${id}`, { method: "DELETE" }) // Requisição DELETE para remover o registro
        .then(() => listarFilmes()) // Recarrega a lista para atualizar a tela
        .catch(err => alert("Erro ao excluir"));
}





/* CARROSSEL AUTOMÁTICO */
let index=0;
setInterval(()=>{
  index=(index+1)%3;
  document.getElementById("carouselTrack")
  .style.transform=`translateX(-${index*100}%)`;
},3000);

/* FILMES CADASTRADOS */
const recomendados=[
];

recomendados.forEach(f=>{
  recommendedGrid.innerHTML+=`
  <div class="card">
    <img src="${f.img}">
    <div class="card-info">${f.title}</div>
  </div>`;
});

/* CADASTRAR FILMES */
let filmes=[];

filmForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  const f={
    title:title.value,
    desc:desc.value,
    year:year.value,
    genre:genre.value,
    age:age.value,
    img:imgUrl.value
  };

  filmeS.push(f);
  renderMyMovies();
  alert("Filme cadastrado!");
});

/* EXIBIR FILMES */
function renderMyMovies(){
  myMoviesGrid.innerHTML="";
  filmes.forEach(f=>{
    myMoviesGrid.innerHTML+=`
    <div class="card" onclick="openModal('${f.title}','${f.desc}')">
      <img src="${f.img}">
      <div class="card-info"><b>${f.title}</b><br>${f.genre} • ${f.year}</div>
    </div>`;
  });
}

/* SCRIPT DO MODAL */
function openModal(t,d){
  modalBackdrop.style.display="flex";
  detailTitle.innerText=t;
  detailDesc.innerText=d;
}

function closeModal(){
  modalBackdrop.style.display="none";
}

/* MUDAR TEMA CLARO/ESCURO */
const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeBtn.innerText="Responsvel";
  }else{
    themeBtn.innerText="Kids";
  }});