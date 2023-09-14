
let botao = document.getElementById("clicks");
let contador = 0;
let display = document.getElementById("contador");

botao.onclick = function() {
    contador++;
    display.innerHTML = contador;
}