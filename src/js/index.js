/* 

OBJETIVO 1 - Quando o usuario clicar no botão de ver trailer, devemos abrir a modal com o video do trailer:
    - Passo 1: Dar um jeito de pegar o elemento que representa o botão na tela usando o JS;
    - Passo 2: Identificar quando o usuário clicar no botão;
    - Passo 3: Dar um jeito de pegar o elemento da modal no js;
    - Passo 4: abrir a modal na tela

OBJETIVO 2 - Quando o usuário clicar no X devemos fechar o modal;
    - Passo 1 - Dar um jeito de pegar o elemento de fechar modal usando o js;
    - Passo 2 - Dar um jeito de identificar quando o usua´rio clicar no X
    = Passo 3 - Fechar a modal

*/

//Console diz respeito do console dos navegadores
//. é para atribuir uma função ao console do navegador
//log é o registro, logo voce estra atribuindo registros ao console do navegador

console.log('mostrar o document', document);

//Dar um jeito de pegar o elemento que representa o botão na tela usando o JS;

//Document representa o documento do HTML;
// O "." é um atributo para especificar função ao documento;
//QuerySelector é Buscar um Selector;

console.log(document.querySelector(".botao-trailer"));

//declarar uma variavel inalteravel. No caso a consta. Ja´que o valor sera sempre o mesmo;

//Para declarar varia usa igual. E atribua um valor a variavel const utilizando o document.querySelector que buscar um Selector na estrutura HTML;

const botaoTrailer = document.querySelector(".botao-trailer");

//Agora a variavel const "botaoTrailer" pega o valor class do botton no HTML.

//Aqui fazemos o mesmo passo anterior de declar a variavel com o valor do selector modal do html

// Passso 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");


//variavel para pegar o id do video
const video = document.getElementById("video");
const LinkDoVideo = video.src;
console.log(LinkDoVideo)

//-------------------!!!!!!-----------------------------------

function AlternarModal () {
    modal.classList.toggle("aberto")
}

//passo 2 - dar um jeito de identificar quando o usuário clicar no botão


//Esse comando adiciona um evento, na qual escuta (observa) algo
//addEventListener

//aqui estou atribuindo um evento ao botaoTrailer, na qual o comando "addEventListener" observa a variavelTrailer
//Atribuimos uma função ao comando "addEventListener" que observa um "click",
botaoTrailer.addEventListener("click", () => {
 
 //Aqui criams um bloco de função para a função "()"   
 //Estamos dizendo que ao clicar no botao trailer com o "click", ele irá executar a função pós virgula. Na qual a função pós virgual é igual ou maior ao bloco de comando que criamos agora.

console.log("clicou no botão veja o trailer");
//teste para checar se a função esta identificando o click no botão

//Passo 4 - abrir a modal na tela
AlternarModal()
//modal.classList.add("aberto");

//Pode-se usar o toggle... que verificar a situação e faz o ooposto

//Busca a modal, atribui a função de acessar a classlist dela e adiciona a classlist a função add com o selecotr "aberto"

video.setAttribute("src", LinkDoVideo);

});

console.log("mostrar o objeto da modal", modal);

// Confusa mas compreensível;

//Parte dois. Fechar Agora.

const botaoFecharModal = document.querySelector(".fechar-modal");

console.log("Olá, sou o span fechar", botaoFecharModal);

//Passo 2 - dar um jeito de identificar quando o usuário clicar no X

botaoFecharModal.addEventListener("click", () => {

    //O mesmo processo de antes, so que antes de adicinar uma classlist ele remove. No caso o "aberto" é removido.
    AlternarModal()
    //modal.classList.remove("aberto");
    video.setAttribute("src", "")

});













