const = Document.querySelectorAll (".botoa");
const = documento.querySelectorAll ("aba-conteudo");
for (let i=0; i <botoes.lenght; i++ ){
    botoes [i].onclick = function (){
        for(let j=0; j<botoes.lenght; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classlist.add("ativo")
        textos[i].classlist.add("ativo")
    }
    console.log(botoes);
}
