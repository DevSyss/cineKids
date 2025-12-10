function openTab(id){
  document.querySelectorAll("section").forEach(s=>s.style.display="none");
  document.getElementById(id).style.display="block";
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

  filmes.push(f);
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
    themeBtn.innerText="Responsável";
  }else{
    themeBtn.innerText="Kids";
  }
});
