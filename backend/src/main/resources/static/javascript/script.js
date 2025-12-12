function openTab(id){
    document.querySelectorAll("section").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
}

const API_URL = "http://localhost:8080/filmes";

// Carrega lista ao abrir página
document.addEventListener("DOMContentLoaded", listarFilmes);

function listarFilmes() {
    fetch(API_URL)
    .then(res => res.json())
    .then(filmes => {

        const lista = document.getElementById("myMoviesGrid");
        lista.innerHTML = "";

        const params = new URLSearchParams(window.location.search);
        const idGenero = params.get("idGenero");

        if (idGenero) {
            filmes = filmes.filter(f => f.genero && f.genero.id == idGenero);
        }

        if (filmes.length === 0) {
            lista.innerHTML = `
                <p style="grid-column: 1/-1; text-align: center; color:#666;">
                    Nenhum filme encontrado.
                </p>`;
            return;

    };
  

function editarFilme(id){
    window.location.href = `html/cadastroFilme.html?id=${id}`;
}

function excluirFilme(id){
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => listarFilmes())
    .catch(() => alert("Erro ao excluir"));
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
  }
};