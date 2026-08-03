const botao = document.querySelector("button");
botao.addEventListener("click", botaoClicado);
const botao = document.querySelector("button");
botao.addEventListener("click", botaoClicado);
function botaoClicado() {
console.log("fui clicado");
}
  function botaoClicado() {
let texto = botao.querySelector("span");
texto.textContent++;
}
