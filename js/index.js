let botaoEncriptar = document.querySelector(".btnencriptador");
let botaoDesencriptar = document.querySelector(".btndesencriptador");
let imagem = document.querySelector(".div2");
let h3 = document.querySelector(".divh3");
let paragrafo = document.querySelector(".divparagrafo");
let resultado = document.querySelector(".texto-resultado");
let copiar= document.querySelector(".btncopiar");

botaoEncriptar.onclick = encriptador;
botaoDesencriptar.onclick = desencriptar;
copiar.onclick = copyText;


function encriptador(){
    ocultarApos();
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarApos();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    let area = document.querySelector(".area");
    return area.value;
}

function ocultarApos(){
    imagem.classList.add("ocultar");
    h3.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function encriptarTexto(texto){
    let text = texto;
    let textoFinal = "";

    for(let i = 0; i < text.length; i++){
        if(text[i] == "a" || text[i] == "A"){
            textoFinal = textoFinal + "ai"
        }
        else if(text[i] == "e" || text[i] == "E"){
            textoFinal = textoFinal + "enter"
        }
        else if(text[i] == "i" || text[i] == "I"){
            textoFinal = textoFinal + "imes"
        }
        else if(text[i] == "o" || text[i] == "O"){
            textoFinal = textoFinal + "ober"
        }
        else if(text[i] == "u" || text[i] == "U"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + text[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(texto){
    let text = texto;
    let textoFinal = "";

    for(let i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if(text[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(text[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(text[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(text[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + text[i];
        }
    }

    return textoFinal;
}

function copyText() {
    let text = document.querySelector('#result').innerText;
    navigator.clipboard.writeText(text);
    alert("Copiado com sucesso")
};