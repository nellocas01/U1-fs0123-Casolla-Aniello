function aggiungiSimbolo(elemento){
    //let simbolo = elemento.textContent;
    let simbolo = elemento.getAttribute('data-simbolo');

    let display = document.querySelector('#display');
    display.value += simbolo;
}

function totale(){
    let display = document.querySelector('#display');
    display.value = eval(display.value);

}

function cancella(){
    let display = document.querySelector('#display');
    display.value = "";
}
