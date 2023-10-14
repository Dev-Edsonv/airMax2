let trocarImagem = document.querySelector("#mainPhoto")


function troquei(endereco) {
    
    trocarImagem.src = endereco

}

let meuMenu = document.querySelector(".links")

meuMenu.style.maxHeight = "0px"

function showMenu() {

    if(meuMenu.style.maxHeight === "0px") {
        meuMenu.style.maxHeight = "120px"
    } else {
        meuMenu.style.maxHeight = "0px"
    }

}