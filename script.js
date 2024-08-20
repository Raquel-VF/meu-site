function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

function trocarTema(){
    let element = document.getElementById('capa');
    element.classList.toggle("outono-mode");
}