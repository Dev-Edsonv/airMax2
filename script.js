let trocarImagem = document.querySelector("#mainPhoto")


function troquei(endereco) {
    
    trocarImagem.src = endereco

}

let meuMenu = document.querySelector(".links")
let background =document.querySelector(".menu")

meuMenu.style.maxHeight = "0px"

function showMenu() {

    if(meuMenu.style.maxHeight === "0px") {
        meuMenu.style.maxHeight = "97px"
        background.style.backgroundColor = "red"
    } else {
        meuMenu.style.maxHeight = "0px"
        background.style.backgroundColor = "greenyellow"
    }

}