function adicionarFilme(){
  var filmeFavorito = document.querySelector('#filme')
  var campoFilme = filmeFavorito.value
  if (campoFilme.includes("youtube")){
    var embedLink = campoFilme.replace("watch?v=", 'embed/')
    listarFilmesNaTela (embedLink) }
  else {alert ("Opção inválida") }
   campoFilme.value = ""
  }
  

function listarFilmesNaTela(filme){
   var listaFilmes = document.querySelector ("#listaFilmes") 
   var elementoFilme = "<iframe src=" + filme + "/iframe>"
   listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function limparTela(){
  
}
